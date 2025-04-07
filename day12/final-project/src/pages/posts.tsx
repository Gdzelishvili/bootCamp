import { GetServerSideProps } from 'next';

export default function Posts({ posts }: { posts: any[] }) {
  return (
    <div>
      <h1>SSR Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const posts = await res.json();
  return { props: { posts } };
};
