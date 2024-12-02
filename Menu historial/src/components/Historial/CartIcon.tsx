import { memo, SVGProps } from 'react';

const CartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13 8V13M5 8V13M9 5V13M4 18H14C16.2091 18 18 16.2091 18 14V4C18 1.79086 16.2091 0 14 0H4C1.79086 0 0 1.79086 0 4V14C0 16.2091 1.79086 18 4 18Z'
      stroke='#8BD9E9'
      strokeWidth={2}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(CartIcon);
export { Memo as CartIcon };
