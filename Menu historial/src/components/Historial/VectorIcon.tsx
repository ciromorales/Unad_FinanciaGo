import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13 0V3M5 0V3M4 18H14C16.2091 18 18 16.2091 18 14V6C18 3.79086 16.2091 2 14 2H4C1.79086 2 0 3.79086 0 6V14C0 16.2091 1.79086 18 4 18Z'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
