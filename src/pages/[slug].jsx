import PropTypes from 'prop-types';
import { getPageBlockMap, getPaths, getPropsForSlug } from '@/utils';
import BlockBuilder from '@/components/blockBuilder';

export default function Page({ pageBlocks }) {
  const blockMap = getPageBlockMap();

  return (
    <main>
      <BlockBuilder blockMap={blockMap} blocks={pageBlocks} />
    </main>
  );
}

export async function getStaticProps({ params }) {
  const pageProps = await getPropsForSlug(params.slug);

  return {
    props: {
      data: pageProps,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getPaths();

  return {
    paths,
    fallback: false,
  };
}

Page.propTypes = {
  pageBlocks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
