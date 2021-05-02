import Content from '@/components/commons/content/content';
import ListPosts from '@/components/list-posts/list-posts';
import { getPosts } from '@/services/api';
import { POSTS_PER_PAGE } from 'config/constants';

export default function Blog({ postsData, paginationData }) {
  const posts = postsData.results;

  return (
    <>
      <Content>
        <div>
          <div>
            <h1 className="text-2xl text-gray-500">Blog</h1>
          </div>
          <ListPosts
            items={posts}
            paginate={true}
            paginationData={paginationData}
          />
        </div>
      </Content>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const page = query.page;
  const posts = await getPosts(page);

  return {
    props: {
      postsData: posts,
      paginationData: {
        page: page,
        total: posts.count,
        perPage: POSTS_PER_PAGE,
      },
    },
  };
}
