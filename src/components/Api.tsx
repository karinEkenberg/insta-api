import React, { useState, useEffect } from "react";

export default function Api() {
  const [fetchPosts, setFetchPosts] = useState([]);
  const [error, setError] = useState<string | null>(null);

  interface Insta {
    albumId: number;
    url: string;
    id: number;
    thumbnailUrl: string;
    title: string;
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((res) => setFetchPosts(res.slice(0, 10)))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Instagram API</h2>
      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : fetchPosts.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "10px",
          }}
        >
          {fetchPosts.map((insta: Insta) => (
            <figure key={insta.id} style={{ textAlign: "center" }}>
              <img
                src={insta.thumbnailUrl}
                alt={insta.title}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              />
              <figcaption style={{ fontSize: "14px", marginTop: "5px" }}>
                {insta.title}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
