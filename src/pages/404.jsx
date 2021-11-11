import PropTypes from 'prop-types';
import { getNavigation } from '@/utils';

export default function Custom404({ message }) {
  return <h1>{message}</h1>;
}

export async function getStaticProps() {
  return {
    props: {
      data: {
        ...(await getNavigation()),
        component: { message: '404 | Page Not Found' },
      },
    },
  };
}

Custom404.propTypes = {
  message: PropTypes.string.isRequired,
};
