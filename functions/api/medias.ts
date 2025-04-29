import { TotonariKvKey } from '../../shared/const';
import type { InstagramMedia } from '../../shared/types';

// OPTIONSリクエストに対するハンドラー
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Max-Age": "86400",
    },
  });
};

// GETリクエストに対するハンドラー
export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    // KVからインスタグラムメディアデータを取得
    const mediasJson = await context.env.TOTONARI_KV.get(TotonariKvKey.INSTAGRAM_RECENT_MEDIAS);

    if (!mediasJson) {
      return new Response(JSON.stringify({ error: 'Instagram media data not found' }), {
        headers: {
          "Content-Type": "application/json",
        },
        status: 404
      });
    }

    // 取得したデータをJSONとしてパース
    const medias = JSON.parse(mediasJson) as InstagramMedia[];

    // データ検証
    // 1. mediasが配列かどうか
    if (!Array.isArray(medias)) {
      throw new Error('mediasが配列ではありません');
    }
    
    // 2. 各mediaの中にpermalink, media_urlがあるか
    if (!medias.every(media => media.permalink && media.media_url)) {
      throw new Error('mediasの中にpermalink もしくは media_urlがありません');
    }

    return new Response(JSON.stringify({
      medias: medias,
      updatedAt: new Date().toISOString()
    }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200
    });
  } catch (error) {
    console.error('Error in medias API:', error);

    return new Response(JSON.stringify({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : String(error)
    }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 500
    });
  }
};

// すべてのリクエストに対してCORSを適用するミドルウェア
export const onRequest: PagesFunction = async (context) => {
  const response = await context.next();
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Max-Age", "86400");
  return response;
};
