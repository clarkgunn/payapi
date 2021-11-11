import { AppProps } from 'next/app';
import { Header } from '@/components/Header';
import HeaderContext from '@/components/Header/HeaderContext';
import { Footer } from '@/components/Footer';
import '@/styles/global.css';

export default function App({ Component, pageProps: { data } }: AppProps) {
  const fullHeightHero = data?.header?.inHero;

  return (
    <>
      {fullHeightHero ? (
        <HeaderContext.Provider value={data.header}>
          <Component {...data.component} />
        </HeaderContext.Provider>
      ) : (
        <>
          {!fullHeightHero && <Header {...data.header} />}
          <Component {...data.component} />
        </>
      )}
      <Footer {...data.footer} />
    </>
  );
}
