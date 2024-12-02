import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 23 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.2862 12C17.1433 12 20.3814 10.7555 22.7465 8.60886L18.2386 5.18652C17.0322 6.01098 15.4132 6.58654 13.2862 6.58654C9.50851 6.58654 6.30219 4.14437 5.15923 0.76878L4.9917 0.782721L0.582021 4.12721L0.524353 4.28431C2.87353 8.85766 7.69892 12 13.2862 12Z'
      fill='#34A853'
    />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
