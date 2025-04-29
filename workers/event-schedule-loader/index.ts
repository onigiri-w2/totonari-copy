import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { TotonariKvKey } from '../../shared/const'
import type { EventDay } from '../../shared/types'

dayjs.extend(timezone)
dayjs.extend(utc)

type WorkerEnv = {
  EVENT_SCHEDULE_PROVIDER_URL: string;
  TOTONARI_KV: KVNamespace;
} & Env;
const TIMEZONE_TOKYO = 'Asia/Tokyo';


export default {
  // テスト、緊急のエンドポイント
  // GET Methodなのが傷だが、Postだと実行面倒なのでとりあえず
  async fetch(_1: Request, env: WorkerEnv, _2: ExecutionContext): Promise<Response> {
    try {
      await loadEventData(env.EVENT_SCHEDULE_PROVIDER_URL, env.TOTONARI_KV);
      return new Response('Event data loaded successfully', { status: 200 });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      return new Response(`Error: ${errorMessage}`, { status: 500 });
    }
  },

  // 定期実行のエンドポイント
  async scheduled(_: ScheduledEvent, env: WorkerEnv, ctx: ExecutionContext): Promise<void> {
    ctx.waitUntil(loadEventData(env.EVENT_SCHEDULE_PROVIDER_URL, env.TOTONARI_KV));
  },
}


async function loadEventData(baseUrl: string, kv: KVNamespace): Promise<void> {
  const japanTime = dayjs().tz(TIMEZONE_TOKYO);
  const [year, month] = [japanTime.year(), japanTime.month() + 1];

  const days = await fetchEventData(`${baseUrl}?year=${year}&month=${month}`);
  await kv.put(TotonariKvKey.EVENT_SCHEDULE, JSON.stringify(days));
}

async function fetchEventData(url: string): Promise<EventDay[]> {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json() as { days: EventDay[] };
    return data.days || [];
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to fetch event data: ${errorMessage}`);
  }
}

