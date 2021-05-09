import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';

import Banners from '@/components/banners/banners';
import Sidebar from '@/components/commons/sidebar/sidebar';
import ListPosts from '@/components/list-posts/list-posts';
import { getBanners, getPosts } from '@/services/api';
import ContentFull from '@/components/commons/content-full/content-full';

export default function Blog({ postsData, banners }) {
  const posts = postsData.results;
  const nextLinkPosts = postsData.next;

  return (
    <>
      <ContentFull>
        <div>
          <ListPosts items={posts} />

          {nextLinkPosts && <ButtonLinkMore link={nextLinkPosts} />}
        </div>
      </ContentFull>
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
