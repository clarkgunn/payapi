import { Component } from 'react';

interface Props {
  blockMap: { [index: string]: typeof Component };
  blocks: [{ __typename: string; _key: string; [rest: string]: unknown }];
}

export default function BlockBuilder({ blockMap, blocks }: Props) {
  return (
    <>
      {blocks.map((block) => {
        const Block = blockMap[block.__typename];
        return Block ? <Block {...block} key={block._key} /> : null;
      })}
    </>
  );
}
