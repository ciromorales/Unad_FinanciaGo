import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14.0014 3.31093C14.0014 2.15983 13.9061 1.31983 13.6998 0.44873H0.287132V5.64422H8.16008C8.00141 6.93538 7.14427 8.87983 5.23947 10.1864L5.21277 10.3604L9.45362 13.58L9.74743 13.6087C12.4458 11.1665 14.0014 7.57313 14.0014 3.31093'
      fill='#4285F4'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
