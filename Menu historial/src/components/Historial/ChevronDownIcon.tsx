import { memo, SVGProps } from 'react';

const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 4 7' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M-3.0598e-07 2.38419e-07L3.74197 3.27423C3.87857 3.39375 3.87857 3.60625 3.74197 3.72577L0 7'
      stroke='#5164BE'
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(ChevronDownIcon);
export { Memo as ChevronDownIcon };
