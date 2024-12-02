import Redis from 'ioredis';

const redis = new Redis({
  host: 'localhost',
  port: 6379,
});

export const cacheData = async (key: string, data: any) => {
  await redis.set(key, JSON.stringify(data), 'EX', 3600); // Cache for 1 hour
};

export const getCacheData = async (key: string) => {
  const data = await redis.get(key);
  return data ? JSON.parse(data) : null;
};
