import { TotonariKvKey } from '../../shared/const';
import type { EventDay } from '../../shared/types';

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
    // KVからイベントデータを取得
    const data = await context.env.TOTONARI_KV.get(TotonariKvKey.EVENT_SCHEDULE);

    if (!data) {
      return new Response(JSON.stringify({ error: 'Event data not found' }), {
        headers: {
          "Content-Type": "application/json",
        },
        status: 404
      });
    }

    // 取得したデータをJSONとしてパース
    const eventDays = JSON.parse(data) as EventDay[];

    return new Response(JSON.stringify({
      days: eventDays,
      updatedAt: new Date().toISOString()
    }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200
    });
  } catch (error) {
    console.error('Error in events API:', error);

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
