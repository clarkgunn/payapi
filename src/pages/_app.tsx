import { AppProps } from 'next/app';
import { Header } from '@/components/header';
import HeaderContext from '@/components/header/headerContext';
import { Footer } from '@/components/footer';
import 'styles/main.css';

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
