import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Hero from '@/components/blocks/Hero';
import Services from '@/components/blocks/Services';
import TextWithIllustration from '@/components/blocks/TextWithIllustration';
import CallToAction from '@/components/blocks/CallToAction';
import Grid from '@/components/blocks/Grid';
import SharedCallToAction from '@/components/blocks/SharedCallToAction';
import Testimonials from '@/components/blocks/Testimonials';
import Gallery from '@/components/blocks/Gallery';
import { ImageCard, TextCard, ImageTextCard } from '@/components/Cards';

export const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
});

interface ComponentMap {
  [index: string]: any;
}

export function getPageBlockMap(): ComponentMap {
  return {
    Hero,
    // Services,
    // TextWithIllustration,
    // CallToAction,
    // Grid,
    // SharedCallToAction,
    // Testimonials,
    // Gallery,
  };
}

export function getCardMap(): ComponentMap {
  return {
    ImageCard,
    TextCard,
    ImageTextCard,
  };
}

export async function getHeader() {
  const query = Header.query;
  const { data } = await client.query({ query });
  const [header] = data.allNavigation;

  return header;
}

export async function getFooter() {
  const query = Footer.query;
  const { data } = await client.query({ query });
  const [footer] = data.allNavigation;

  return footer;
}

export async function getNavigation() {
  return {
    header: await getHeader(),
    footer: await getFooter(),
  };
}

export async function getPropsForSlug(slug: string) {
  const GET_DATA = gql`
    query getPageBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        _id
        pageName
        slug {
          current
        }
        pageBlocks {
          __typename
          ...Hero
          ...Services
          ...TextWithIllustration
          ...CallToAction
          ...Gallery
          ...Grid
          ...SharedCallToAction
          ...Testimonials
        }
      }
    }
    ${Hero.fragment}
    ${Services.fragment}
    ${TextWithIllustration.fragment}
    ${CallToAction.fragment}
    ${Grid.fragment}
    ${SharedCallToAction.fragment}
    ${Testimonials.fragment}
    ${Gallery.fragment}
  `;

  const { errors, data } = await client.query({
    query: GET_DATA,
    variables: { slug },
  });

  if (errors) {
    console.error(errors);
  } else {
    const [component] = data.allPage;

    return {
      component,
      ...(await getNavigation()),
    };
  }
}

export async function getPaths() {
  const GET_PATHS = gql`
    query getAllPageSlugs {
      allPage {
        _id
        pageName
        slug {
          current
        }
      }
    }
  `;
  const { errors, data } = await client.query({ query: GET_PATHS });

  if (errors) {
    console.error(errors);
  } else {
    return data.allPage.map(({ slug }: { slug: { current: string } }) => {
      return {
        params: { slug: slug.current },
      };
    });
  }
}

export function popBlockByTypename(
  typename: string,
  blocks: [{ __typename: string }],
) {
  const [block] = blocks.splice(
    blocks.findIndex((block) => block.__typename === typename),
    1,
  );

  return block;
}
