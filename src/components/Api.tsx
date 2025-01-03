// smart component som hämtar data från en API och visar det i en grid och sköter logiken

import { useState, useEffect } from 'react';
import InstagramGrid from './InstagramGrid';

export interface InstaType {
  albumId: number;
  url: string;
  id: number;
  thumbnailUrl: string;
  title: string;
}

export default function Api() {
  const [fetchPosts, setFetchPosts] = useState<InstaType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1200));
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setFetchPosts(data.slice(0, 10));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Instagram API</h2>
      {loading ? (
        <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>
      ) : error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : (
        <InstagramGrid posts={fetchPosts} />
      )}
    </div>
  );
}
