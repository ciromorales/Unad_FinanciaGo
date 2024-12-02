import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z' fill='#03053D' />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
