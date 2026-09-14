import { photos, videos } from '../data/memories';

const photoById = new Map(photos.map((photo) => [photo.id, photo]));
const videoById = new Map(videos.map((video) => [video.id, video]));

export function getPhoto(id: string) {
  const photo = photoById.get(id);

  if (!photo) {
    throw new Error(`Missing photo: ${id}`);
  }

  return photo;
}

export function getVideo(id: string) {
  const video = videoById.get(id);

  if (!video) {
    throw new Error(`Missing video: ${id}`);
  }

  return video;
}
