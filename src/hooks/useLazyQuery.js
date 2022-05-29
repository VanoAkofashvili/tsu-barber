import { useState } from 'react';

export function useLazyQuery(callback, { onCompleted = () => {} }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function lazyFetch(...args) {
    try {
      setLoading(true);
      const response = await callback(...args);
      onCompleted(response);
    } catch (e) {
      console.log('useLazyQuery:::', e);
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  return [lazyFetch, { data, loading, error }];
}
