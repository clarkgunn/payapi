import { Cloudinary } from 'cloudinary-core';

const cloud_name = 'clarkgunn';
const base = `https://res.cloudinary.com/${cloud_name}/image/upload/`;
const cl = new Cloudinary({ cloud_name, secure: true });

export function getImageUrl(imageName: string, options = {}): string {
  const url = cl.url(imageName, options);

  return `/${url.replace(base, '')}`;
}

export function getPlaceholderUrl(imageName: string, options = {}): string {
  const url = cl.url(imageName, {
    ...options,
    transformation: [
      { effect: 'blur:1000', quality: 1 },
      { effect: 'cartoonify' },
    ],
  });

  return url.replace(base, '');
}
