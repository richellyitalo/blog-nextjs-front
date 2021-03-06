import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';

import Banners from '@/components/banners/banners';
import Content from '@/components/commons/content/content';
import Sidebar from '@/components/commons/sidebar/sidebar';
import ListPosts from '@/components/list-posts/list-posts';
import { getBanners, getPosts } from '@/services/api';

export default function Home({ postsData, banners }) {
  const posts = postsData.results;
  const nextLinkPosts = postsData.next;

  return (
    <>
      <Content>
        <div>
          <ListPosts items={posts} />

          {nextLinkPosts && <ButtonLinkMore link={nextLinkPosts} />}
        </div>
      </Content>

      <Sidebar>
        <Banners items={banners} />
      </Sidebar>
    </>
  );
}

const ButtonLinkMore = () => (
  <div className="text-right">
    <Link
      href={{
        pathname: '/blog/page/[page]',
        query: { page: 2 },
      }}
    >
      <a className="text-gray-600 text-xs hover:text-gray-800 border p-2 border-gray-100 rounded border-solid">
        Ver mais publicações
        <IoMdArrowForward className="inline ml-1" />
      </a>
    </Link>
  </div>
);

export async function getStaticProps() {
  const postsData = await getPosts();
  const banners = await getBanners();

  return {
    props: {
      postsData,
      banners,
    },
  };
}

// export async function getServerSideProps({ query }) {
//   const data = await getPosts();

//   return {
//     props: {
//       postsData: data,
//     },
//     // revalidate: 120,
//   };
// }
