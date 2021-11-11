/* eslint-disable @next/next/no-img-element */
import styles from './hero.module.css';
import gql from 'graphql-tag';
import Image from 'next/image';
import Script from 'next/script';
import { useContext } from 'react';
import HeaderContext from 'components/header/headerContext';
import { Header } from 'components/header';
import { image } from 'utils/graphql/fragments';
import { getImageUrl } from 'utils/image';

export default function Hero({ headline, image }) {
  const headerProps = useContext(HeaderContext);
  const fullHeightHero = !!headerProps;
  const imageSrc = getImageUrl(image.public_id);

  return (
    <section
      className={`${styles.hero} ${fullHeightHero ? 'cover' : ''}`}
      aria-labelledby="hero-headline"
    >
      <FullHeightHeroHeader
        isFullHeight={fullHeightHero}
        headerProps={headerProps}
      />
      <div className="switcher">
        <div className={styles.heroImage}>
          <Image
            layout="intrinsic"
            height={500}
            width={263}
            src={imageSrc}
            alt="foobar"
            quality={100}
            priority
          />
        </div>
        <h1 id="hero-headline">{headline}</h1>
      </div>
    </section>
  );
}

function FullHeightHeroHeader({ isFullHeight, headerProps }) {
  return isFullHeight ? (
    <>
      <Script src="/scripts/resize.js" strategy="beforeInteractive" />
      <Header {...headerProps} inverted />
    </>
  ) : null;
}

Hero.fragment = gql`
  fragment Hero on Hero {
    _key
    headline
    image {
      ...image
    }
  }
  ${image}
`;
