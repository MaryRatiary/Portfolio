import { getStore } from '@netlify/blobs';

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });

export default async function handler(request) {
  if (request.method !== 'GET' && request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405);
  }

  try {
    const store = getStore('portfolio-stats');
    const raw = await store.get('views');
    const current = Number.parseInt(raw || '0', 10);
    const views = (Number.isFinite(current) ? current : 0) + 1;

    await store.set('views', String(views));
    return json({ views });
  } catch (error) {
    return json({ error: 'Unable to update views' }, 500);
  }
}
