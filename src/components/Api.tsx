import { useState, useEffect } from 'react';

export default function Api() {
  const [fetchPosts, setFetchPosts] = useState<Insta[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  interface Insta {
    albumId: number;
    url: string;
    id: number;
    thumbnailUrl: string;
    title: string;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1200)); // Fejkar delay:en för att testa loading state
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
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '10px',
          }}
        >
          {fetchPosts.map((insta: Insta, index: number) => (
            <>
              <figure key={insta.id} style={{ textAlign: 'center' }}>
                <img
                  key={index}
                  src={insta.thumbnailUrl}
                  alt={insta.title}
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  }}
                />
                <figcaption style={{ fontSize: '14px', marginTop: '5px' }}>{insta.title}</figcaption>
              </figure>
            </>
          ))}
        </div>
      )}
    </div>
  );
}
