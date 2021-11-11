import { getPageBlockMap, getPropsForSlug } from '@/utils';
import BlockBuilder from '@/components/BlockBuilder';

interface Props {
  pageBlocks: [{ __typename: string; _key: string; [rest: string]: unknown }];
}

export default function Home({ pageBlocks }: Props) {
  const blockMap = getPageBlockMap();

  return (
    <main>
      <BlockBuilder blockMap={blockMap} blocks={pageBlocks} />
    </main>
  );
}

export async function getStaticProps() {
  const pageProps = await getPropsForSlug('/home');

  return {
    props: {
      data: pageProps,
    },
  };
}
