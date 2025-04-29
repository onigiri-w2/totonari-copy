"use client";

import Gallery from './Gallery';
import { useInstagramMedias } from './hooks/useInstagramMedias';

export default function GalleryContainer() {
  const { medias, isLoading, error } = useInstagramMedias();

  return (
    <div className="relative">
      <Gallery data={medias} />

      {/* オーバーレイ - ローディング中 */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent z-10">
          <p className="text-[14px] text-white font-medium">読み込み中...</p>
        </div>
      )}

      {/* オーバーレイ - エラー時 */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent z-10">
          <p className="text-[14px] text-white font-medium">読み込みに失敗しました</p>
        </div>
      )}
    </div>
  );
}
