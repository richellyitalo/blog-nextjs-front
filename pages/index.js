import Navigation from '@/components/commons/navigation/navigation';
import Slider from '@/components/commons/slider';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Navigation />
      <Slider />
    </div>
  );
}

