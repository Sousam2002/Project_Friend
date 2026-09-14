import type { PhotoMemory, VideoMemory } from '../data/memories';

export function MemoryImage({
  photo,
  className = '',
  loading = 'lazy',
  showCaption = false,
}: {
  photo: PhotoMemory;
  className?: string;
  loading?: 'eager' | 'lazy';
  showCaption?: boolean;
}) {
  return (
    <figure className={`memory-frame ${photo.aspect} ${className}`}>
      <img
        src={photo.src}
        alt={photo.alt}
        loading={loading}
        decoding="async"
        fetchPriority={photo.priority ? 'high' : 'auto'}
        onError={(event) => {
          if (photo.fallbackSrc && event.currentTarget.getAttribute('src') !== photo.fallbackSrc) {
            event.currentTarget.src = photo.fallbackSrc;
          }
        }}
      />
      {showCaption && photo.caption ? <figcaption>{photo.caption}</figcaption> : null}
    </figure>
  );
}

export function MemoryVideo({
  video,
  className = '',
}: {
  video: VideoMemory;
  className?: string;
}) {
  return (
    <figure className={`video-frame ${video.aspect} ${className}`}>
      <div className="video-chrome">
        <p className="mono-label">{video.title}</p>
        <video
          controls
          playsInline
          preload="metadata"
          poster={video.poster}
          aria-label={video.caption}
        >
          <source src={video.src} type="video/mp4" />
          <track
            default
            kind="captions"
            src={video.captionsSrc}
            srcLang="en"
            label="English captions"
          />
          Your browser cannot play this birthday evidence.
        </video>
      </div>
      <figcaption>{video.caption}</figcaption>
    </figure>
  );
}
