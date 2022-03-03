import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'sh94wudt',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'sk3xFEDsmLkBsNWVSzo4eRc0oHTJxeI6zuZPY5TFmjt6y8puPvuOX8t9c7StAy8LhZzlsqQxGPw52qBY5tZXvanZm8QFBhI7RguLh7kYNbH1hp9qyRAZviVfHktuC2panW4BjOjcrdohmc6WaL6sC8a3UIQsoevQCuCsZpOdNgPZNOEZyDSw',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
