import PropTypes from 'prop-types';
import { getNavigation } from '@/utils';

export default function Custom500({ message }) {
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

Custom500.propTypes = {
  message: PropTypes.string.isRequired,
};
