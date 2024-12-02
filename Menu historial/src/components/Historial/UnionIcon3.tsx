import { memo, SVGProps } from 'react';

const UnionIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V5V11V12C20 14.2091 18.2091 16 16 16H4C1.79086 16 0 14.2091 0 12V4ZM16 2C17.1046 2 18 2.89543 18 4H16C13.7909 4 12 5.79086 12 8C12 10.2091 13.7909 12 16 12H18C18 13.1046 17.1046 14 16 14H4C2.89543 14 2 13.1046 2 12V4C2 2.89543 2.89543 2 4 2H16ZM16 6H18V10H16C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6ZM16 9C16.5523 9 17 8.55229 17 8C17 7.44772 16.5523 7 16 7C15.4477 7 15 7.44772 15 8C15 8.55229 15.4477 9 16 9Z'
      fill='#8CD9E9'
    />
  </svg>
);

const Memo = memo(UnionIcon3);
export { Memo as UnionIcon3 };
