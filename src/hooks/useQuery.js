import { useEffect, useState } from 'react';

export function useQuery(callback, ...args) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function fetch() {
    try {
      setLoading(true);
      const response = await callback(...args);
      setData(response);
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
