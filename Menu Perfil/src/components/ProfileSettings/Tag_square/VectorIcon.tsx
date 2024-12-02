import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8 1C8 0.447715 7.55228 0 7 0H6C2.68629 0 0 2.68629 0 6V14C0 17.3137 2.68629 20 6 20H14C17.3137 20 20 17.3137 20 14V13C20 12.4477 19.5523 12 19 12C18.4477 12 18 12.4477 18 13V14C18 16.2091 16.2091 18 14 18H6C3.79086 18 2 16.2091 2 14V6C2 3.79086 3.79086 2 6 2H7C7.55228 2 8 1.55228 8 1Z'
      fill='black'
    />
    <path
      d='M16 5C16 5.55228 15.5523 6 15 6C14.4477 6 14 5.55228 14 5C14 4.44772 14.4477 4 15 4C15.5523 4 16 4.44772 16 5Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
