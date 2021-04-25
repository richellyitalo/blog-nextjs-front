import Content from '@/components/commons/content/content';
import Sidebar from '@/components/commons/sidebar/sidebar';
import ListPosts from '@/components/list-posts/list-posts';
import { getPosts } from '@/services/api';
import axios from 'axios';
import styles from '../styles/Home.module.css';

export default function Home({ posts }) {
  return (
    <>
      <Content>
        <ListPosts items={posts.results} />
      </Content>
      <Sidebar>
        <ul class="list-decimal">
          <li>banner 1</li>
          <li>banner 2</li>
        </ul>
      </Sidebar>
    </>
  );
}

export async function getStaticProps() {
  const data = await getPosts().then((res) => res.data);

  return {
    props: {
      posts: data,
      pagination: {
        next: data.next,
        prev: data.previous,
        total: data.count,
      },
    },
    revalidate: 120,
  };
}
