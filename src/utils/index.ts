import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Hero from '@/components/blocks/Hero';
import { ImageCard, TextCard, ImageTextCard } from '@/components/Cards';
import GET_ALL_PATHS from '@/graphql/GET_ALL_PATHS';
import GET_PAGE_BY_SLUG from '@/graphql/GET_PAGE_BY_SLUG';

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
  const { errors, data } = await client.query({
    query: GET_PAGE_BY_SLUG,
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
  const { errors, data } = await client.query({ query: GET_ALL_PATHS });

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
