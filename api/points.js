import { kv } from '@vercel/kv';

export default async function handler(request, response) {
  const STORAGE_KEY = 'campus_map_points_online';

  // 诊断信息：检查环境变量是否注入
  if (!process.env.KV_REST_API_URL) {
    return response.status(500).json({ 
      error: 'Vercel KV 未配置。请在 Vercel 控制台连接 KV 数据库并重新部署。',
      debug: 'Missing KV_REST_API_URL'
    });
  }

  try {
    if (request.method === 'GET') {
      const points = await kv.get(STORAGE_KEY);
      return response.status(200).json(points || []);
    } else if (request.method === 'POST') {
      const newPoints = request.body;
      if (!Array.isArray(newPoints)) {
        return response.status(400).json({ error: '数据格式错误，应为数组' });
      }
      // 写入数据库
      await kv.set(STORAGE_KEY, newPoints);
      return response.status(200).json({ success: true, count: newPoints.length });
    } else {
      return response.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('KV Error:', error);
    return response.status(500).json({ error: '数据库访问失败', details: error.message });
  }
}
