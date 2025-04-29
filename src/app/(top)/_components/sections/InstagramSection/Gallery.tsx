import type { InstagramMedia } from '@shared/types';

type Props = {
  data: InstagramMedia[];
}

export default function Gallery({ data }: Props) {
  // データが空の場合はプレースホルダーを表示
  if (!data || data.length === 0) {
    return (
      <div className="flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="aspect-square flex-1 bg-gray-400"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex space-x-2">
      {data.map((media, i) => (
        <a
          key={i}
          href={media.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-square flex-1"
        >
          <img
            src={media.media_url}
            alt="Instagram"
            className="w-full h-full object-cover"
            onError={(e) => {
              // 画像の読み込みに失敗した場合のフォールバック
              e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100"><rect width="100%" height="100%" fill="%23f1f1f1"/><text x="50%" y="50%" font-family="sans-serif" font-size="12" text-anchor="middle" dominant-baseline="middle" fill="%23999">Image not available</text></svg>';
              e.currentTarget.classList.add('image-loading-error');
            }}
          />
        </a>
      ))}
    </div>
  )
}
