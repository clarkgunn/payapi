import { gql } from '@apollo/client';
import { getCardMap } from 'utils';
import BlockBuilder from 'components/blockBuilder';
import { ImageCard, ImageTextCard, TextCard } from 'components/cards';

export default function Grid({ cards }) {
  const cardMap = getCardMap();

  return (
    <section className="grid">
      <BlockBuilder blockMap={cardMap} blocks={cards} />
    </section>
  );
}

Grid.fragment = gql`
  fragment Grid on Grid {
    _key
    name
    cards {
      ...ImageCard
      ...TextCard
      ...ImageTextCard
    }
  }
  ${ImageCard.fragment}
  ${TextCard.fragment}
  ${ImageTextCard.fragment}
`;
