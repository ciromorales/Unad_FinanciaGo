import { memo, SVGProps } from 'react';

const ArrowToTopIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M8 4L4 0M4 0L0 4M4 0V14' stroke='white' strokeWidth={2} strokeLinecap='round' />
  </svg>
);

const Memo = memo(ArrowToTopIcon);
export { Memo as ArrowToTopIcon };
