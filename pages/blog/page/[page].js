import ContentFull from '@/components/commons/content-full/content-full';
import ListPosts from '@/components/list-posts/list-posts';
import { getPosts } from '@/services/api';
import { POSTS_PER_PAGE } from 'config/constants';

export default function Blog({ postsData, paginationData }) {
  // if (!postsData) {
  //   return <h1>Loading...</h1>;
  // }
  
  const posts = postsData.results;

  return (
    <>
      <ContentFull>
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
      </ContentFull>
    </>
  );
}

export async function getStaticPaths() {
  const posts = await getPosts();
  const totalPages = Math.ceil(posts.count / POSTS_PER_PAGE);

  const paths = [...Array(totalPages).keys()].map((pageIndex) => ({
    params: { page: (pageIndex + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const page = params.page;
  const posts = await getPosts(page);

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      postsData: posts,
      paginationData: {
        page: page,
        total: posts.count,
        perPage: POSTS_PER_PAGE,
      },
    },
    revalidate: 10,
  };
}

// export async function getServerSideProps({ query }) {
//   const page = query.page;
//   const posts = await getPosts(page);

//   return {
//     props: {
//       postsData: posts,
//       paginationData: {
//         page: page,
//         total: posts.count,
//         perPage: POSTS_PER_PAGE,
//       },
//     },
//   };
// }
