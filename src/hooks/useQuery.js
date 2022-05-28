import { useEffect, useState } from 'react';

// Because i'm not using real api, i will expect callback as an argument NOT url
export function useQuery(callback, ...args) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
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

    getData();
  }, []);

  return { data, loading, error };
}
