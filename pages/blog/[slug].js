import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

import ContentFull from '@/components/commons/content-full/content-full';
import { getPostBySlug } from '@/services/api';
import Article from '@/components/article/article';

export default function Blog(props) {
  const router = useRouter();
  const slug = router.query.slug;
  // const { post } = useQuery('posts', () => getPostsBySlug(slug), { initialData: props.post });

  const { title, content, image, created_at } = props.post;

  return (
    <>
      <ContentFull>
        <Article
          title={title}
          content={content}
          dateTime={created_at}
          imageUrl={image}
        />
      </ContentFull>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const slug = query.slug;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}
