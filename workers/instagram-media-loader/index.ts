import { TotonariKvKey } from "../../shared/const";
import type { InstagramMedia } from "../../shared/types";

const INSTAGRAM_BASE_URL = "https://graph.instagram.com/v22.0/me/media?fields=media_url,permalink&limit=3";
type InstagramResponse = {
  data: InstagramMedia[];
}
type WorkerEnv = {
  INSTAGRAM_ACCESS_TOKEN: string;
  TOTONARI_KV: KVNamespace;
} & Env;

export default {
  // テスト、緊急用のエンドポイント
  async fetch(_1: Request, env: WorkerEnv, _2: ExecutionContext): Promise<Response> {
    try {
      await loadData(env);
      return new Response('Instagram media data loaded successfully', { status: 200 });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      return new Response(`Error: ${errorMessage}`, { status: 500 });
    }
  },

  async scheduled(_: ScheduledEvent, env: WorkerEnv, ctx: ExecutionContext): Promise<void> {
    ctx.waitUntil(loadData(env));
  },

};

// Instagram APIからデータを取得してKVに保存する関数
async function loadData(env: WorkerEnv): Promise<void> {
  // instagram api からデータ取得
  const url = `${INSTAGRAM_BASE_URL}&access_token=${env.INSTAGRAM_ACCESS_TOKEN}`
  const medias = await fetch(url)
    .then(res => res.json())
    .then(data => data as InstagramResponse)
    .catch(error => {
      throw new Error(`Instagram APIへのリクエストに失敗しました: ${error.message}`, { cause: error })
    })

  // 必要なデータを抽出して検証を行う
  if (medias.data.every(media => 'media_url' in media && 'permalink' in media) === false) {
    throw new Error(`Instagram API のレスポンスJSONが想定の内容ではありません(media_url, permalink があること想定):  ${medias.data}`)
  }

  await env.TOTONARI_KV.put(TotonariKvKey.INSTAGRAM_RECENT_MEDIAS, JSON.stringify(medias.data))
}


