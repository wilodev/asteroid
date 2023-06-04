import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  NASA_API_KEY: process.env.NASA_API_KEY,
  NASA_API_URL: process.env.NASA_API_URL,
  MONGODB_HOST: process.env.MONGODB_HOST,
  MONGODB_PORT: process.env.MONGODB_PORT,
  MONGODB_DATABASE: process.env.MONGODB_DATABASE,
  MONGODB_USERNAME: process.env.MONGODB_USERNAME,
  MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
}));
