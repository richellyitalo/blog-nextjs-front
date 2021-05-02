import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';
import styles from '../styles/Home.module.css';

import Banners from '@/components/banners/banners';
import Content from '@/components/commons/content/content';
import Sidebar from '@/components/commons/sidebar/sidebar';
import ListPosts from '@/components/list-posts/list-posts';
import { getPosts } from '@/services/api';

const ButtonLinkMore = () => (
  <div className="text-right">
    <Link
      href={{
        pathname: '/blog/[page]',
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

export default function Home({ postsData }) {
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
        <Banners />
      </Sidebar>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const data = await getPosts();

  return {
    props: {
      postsData: data,
    },
    // revalidate: 120,
  };
}
