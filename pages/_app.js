import NextNProgress from 'nextjs-progressbar';
import SiteLayout from '@/components/ui/layout/site-layout';

import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <SiteLayout>
      <NextNProgress />
      <Component {...pageProps} />
    </SiteLayout>
  );
}

export default MyApp;
