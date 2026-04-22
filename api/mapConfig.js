import { kv } from '@vercel/kv';

export default async function handler(request, response) {
  const STORAGE_KEY = 'campus_map_overlay_config_v1';

  if (!process.env.KV_REST_API_URL) {
    return response.status(500).json({
      error: 'Vercel KV 未配置。请在 Vercel 控制台连接 KV 数据库并重新部署。',
      debug: 'Missing KV_REST_API_URL'
    });
  }

  try {
    if (request.method === 'GET') {
      const cfg = await kv.get(STORAGE_KEY);
      return response.status(200).json(cfg || null);
    }

    if (request.method === 'POST') {
      let body = request.body;
      if (typeof body === 'string') {
        try {
          body = JSON.parse(body);
        } catch {
          return response.status(400).json({ error: '数据格式错误，应为 JSON 对象' });
        }
      }
      if (!body || typeof body !== 'object') {
        return response.status(400).json({ error: '数据格式错误，应为对象' });
      }
      await kv.set(STORAGE_KEY, body);
      return response.status(200).json({ success: true });
    }

    return response.status(405).json({ error: 'Method Not Allowed' });
  } catch (error) {
    console.error('KV Error:', error);
    return response.status(500).json({ error: '数据库访问失败', details: error.message });
  }
}

