import { memo, SVGProps } from 'react';

const ShapeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 19 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 0H2.5L2.78571 2M15 14C13.8954 14 13 14.8954 13 16C13 17.1046 13.8954 18 15 18C16.1046 18 17 17.1046 17 16C17 14.8954 16.1046 14 15 14ZM15 14H7M7 14C5.89543 14 5 14.8954 5 16C5 17.1046 5.89543 18 7 18C8.10457 18 9 17.1046 9 16C9 14.8954 8.10457 14 7 14ZM7 14H4.5L4.07143 11M4.07143 11H16L19 2H2.78571M4.07143 11L2.78571 2'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ShapeIcon);
export { Memo as ShapeIcon };
