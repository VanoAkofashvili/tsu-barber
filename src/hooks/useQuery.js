import { useEffect, useState } from 'react';

// Because i'm not using real api, i will expect callback as an argument NOT url
export function useQuery(callback, ...args) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function fetch() {
    try {
      setLoading(true);
      const response = await callback(...args);
      setData(JSON.parse(JSON.stringify(response || {}))); // To avoid reference bugs
    } catch (e) {
      console.error('useQuery:::', e);
      setError(e);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetch();
  }, []);
  return { data, loading, error, refetch: fetch };
}
