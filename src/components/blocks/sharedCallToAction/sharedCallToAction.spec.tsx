import { render } from '@testing-library/react';

import SharedCallToAction from './sharedCallToAction';

describe('SharedCallToAction', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SharedCallToAction heading="foobar" link={{ url: '/', text: 'home' }} />,
    );
    expect(baseElement).toBeTruthy();
  });
});
