import useSWR from 'swr';
import axios from 'axios';
import type { InstagramMedia } from '@shared/types';

interface MediasResponse {
  medias: InstagramMedia[];
  updatedAt: string;
}

// axios を使用した fetcher 関数
const fetcher = async (url: string): Promise<MediasResponse> => {
  try {
    const response = await axios.get<MediasResponse>(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const newError = new Error(error.message || 'Instagramメディアの取得に失敗しました');
      newError.name = String(error.response?.status || 'UNKNOWN');
      throw newError;
    }
    throw error;
  }
};

export function useInstagramMedias() {
  const { data, error, isLoading, isValidating, mutate } = useSWR<MediasResponse, Error>(
    '/api/medias',
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
    medias: data?.medias || [],
    isLoading,
    isValidating,
    error,
    reload: () => mutate() // 手動で再取得するための関数
  };
}
