"use client";

import useSWR from 'swr';
import axios from 'axios';
import type { EventDay } from '@shared/types';

interface EventsResponse {
  days: EventDay[];
  updatedAt: string;
}

// axios を使用した fetcher 関数
const fetcher = async (url: string): Promise<EventsResponse> => {
  try {
    const response = await axios.get<EventsResponse>(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const newError = new Error(error.message || 'イベントデータの取得に失敗しました');
      newError.name = String(error.response?.status || 'UNKNOWN');
      throw newError;
    }
    throw error;
  }
};

export function useEventSchedule() {
  const { data, error, isLoading, isValidating, mutate } = useSWR<EventsResponse, Error>(
    '/api/events',
    fetcher,
    {
      revalidateOnFocus: false,  // フォーカス時に再検証しない
      revalidateOnReconnect: false,  // 再接続時に再検証しない
      refreshWhenOffline: false,  // オフライン時に更新しない
      refreshWhenHidden: false,  // 非表示時に更新しない
      refreshInterval: 0,  // 自動更新をしない
      errorRetryCount: 3,  // エラー時に3回までリトライ
      dedupingInterval: 0, // 重複排除しない
      keepPreviousData: true, // 前回のデータを保持する
    }
  );

  return {
    eventDays: data?.days || [],
    isLoading,
    isValidating,
    error,
    reload: () => mutate() // 手動で再取得するための関数
  };
}
