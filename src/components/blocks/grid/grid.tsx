import { Component } from 'react';
import { gql } from '@apollo/client';
import { getCardMap } from '@/utils';
import BlockBuilder from '@/components/BlockBuilder';
import { ImageCard, ImageTextCard, TextCard } from '@/components/Cards';

interface Props {
  cards: [{ __typename: string; _key: string; [rest: string]: unknown }];
}

export default function Grid({ cards }: Props) {
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
