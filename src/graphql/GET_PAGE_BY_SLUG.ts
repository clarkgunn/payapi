import { gql } from '@apollo/client';
import Hero from '@/components/blocks/Hero';
import Services from '@/components/blocks/Services';
import TextWithIllustration from '@/components/blocks/TextWithIllustration';
import CallToAction from '@/components/blocks/CallToAction';
import Grid from '@/components/blocks/Grid';
import SharedCallToAction from '@/components/blocks/SharedCallToAction';
import Testimonials from '@/components/blocks/Testimonials';
import Gallery from '@/components/blocks/Gallery';

const GET_PAGE_BY_SLUG = gql`
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

export default GET_PAGE_BY_SLUG;
