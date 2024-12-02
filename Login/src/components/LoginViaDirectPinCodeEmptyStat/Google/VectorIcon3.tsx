import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 7 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.16007 9.76886C5.85848 8.89776 5.68395 7.96436 5.68395 6.99996C5.68395 6.03546 5.85849 5.10216 6.1442 4.23106L6.13621 4.04554L1.67126 0.647362L1.52518 0.715458C0.556965 2.61326 0.00140381 4.74441 0.00140381 6.99996C0.00140381 9.25551 0.556965 11.3866 1.52518 13.2844L6.16007 9.76886'
      fill='#FBBC05'
    />
  </svg>
);

const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
