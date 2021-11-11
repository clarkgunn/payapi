import { getPageBlockMap, getPaths, getPropsForSlug } from '@/utils';
import BlockBuilder from '@/components/BlockBuilder';

interface Props {
  pageBlocks: [{ __typename: string; _key: string; [rest: string]: unknown }];
}

export default function Page({ pageBlocks }: Props) {
  const blockMap = getPageBlockMap();

  return (
    <main>
      <BlockBuilder blockMap={blockMap} blocks={pageBlocks} />
    </main>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
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
