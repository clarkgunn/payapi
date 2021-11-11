import '@testing-library/jest-dom/extend-expect';
/* eslint-disable @next/next/no-img-element */
import '@testing-library/jest-dom';
import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

jest.mock('next/image', () => {
  return {
    __esModule: true,
    default: function image({ src, alt }: { src: string; alt: string }) {
      return (
        <div>
          <div>
            <img src={src} alt={alt} />
          </div>
        </div>
      );
    },
  };
});
