import { kv } from '@vercel/kv';

export default async function handler(request, response) {
  const STORAGE_KEY = 'campus_map_points_online';

  try {
    if (request.method === 'GET') {
      // 获取线上数据
      const points = await kv.get(STORAGE_KEY);
      return response.status(200).json(points || []);
    } else if (request.method === 'POST') {
      // 保存线上数据
      const newPoints = request.body;
      if (!Array.isArray(newPoints)) {
        return response.status(400).json({ error: '数据格式错误，应为数组' });
      }
      await kv.set(STORAGE_KEY, newPoints);
      return response.status(200).json({ success: true });
    } else {
      return response.status(405).json({ error: '不支持的请求方法' });
    }
  } catch (error) {
    console.error('API Error:', error);
    return response.status(500).json({ error: '服务器错误' });
  }
}
