import NextNProgress from 'nextjs-progressbar';
import SiteLayout from '@/components/ui/layout/site-layout';

import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <SiteLayout>
      <NextNProgress />
      <Component {...pageProps} />
    </SiteLayout>
  );
}

export default MyApp;
