/* eslint-disable @next/next/no-img-element */
import styles from './hero.module.css';
import { gql } from '@apollo/client';
import Image from 'next/image';
import Script from 'next/script';
import { useContext } from 'react';
import HeaderContext from '@/components/Header/HeaderContext';
import { Header, HeaderProps } from '@/components/Header';
import { image } from '@/graphql/fragments';
import { getImageUrl } from '@/utils/image';

interface FullHeightHeroHeaderProps {
  isFullHeight: boolean;
  headerProps: HeaderProps;
}

function FullHeightHeroHeader({
  isFullHeight,
  headerProps,
}: FullHeightHeroHeaderProps) {
  return isFullHeight ? (
    <>
      <Script src="/scripts/resize.js" strategy="beforeInteractive" />
      <Header {...headerProps} inverted />
    </>
  ) : null;
}

interface Props {
  headline: string;
  image: {
    public_id: string;
  };
}

export default function Hero({ headline, image }: Props) {
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
