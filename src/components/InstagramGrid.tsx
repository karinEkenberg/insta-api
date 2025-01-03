import { InstaType } from './Api';

interface InstagramGridProps {
  posts: InstaType[];
}

export default function InstagramGrid({ posts }: InstagramGridProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '10px',
      }}
    >
      {posts.map((insta: InstaType) => (
        <figure key={insta.id} style={{ textAlign: 'center' }}>
          <img
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
      ))}
    </div>
  );
}
