type WorkerEnv = {
  INSTAGRAM_ACCESS_TOKEN: string;
};

const REFRESH_URL = "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token"

export default {
  // テスト、緊急用のエンドポイント
  async fetch(_1: Request, env: WorkerEnv, _2: ExecutionContext): Promise<Response> {
    try {
      await refresh(env);
      return new Response('Instagram Access Token refreshed successfully', {
        status: 200,
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      return new Response(`Error: ${errorMessage}`, { status: 500 });
    }
  },

  async scheduled(_: ScheduledEvent, env: WorkerEnv, ctx: ExecutionContext): Promise<void> {
    ctx.waitUntil(refresh(env));
  },

};

// Instagram APIからデータを取得してKVに保存する関数
async function refresh(env: WorkerEnv): Promise<void> {
  const url = `${REFRESH_URL}&access_token=${env.INSTAGRAM_ACCESS_TOKEN}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to refresh access token: ${response.statusText}`);
  }

  console.log('Instagram Access Token refreshed successfully');
}


