import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

export default function Post({ post }: { post: any }) {
  const router = useRouter();
  if (router.isFallback) return <p>Loading...</p>;

  return (
    <div>
      <h1>Post #{post.id}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return { props: { post } };
};
