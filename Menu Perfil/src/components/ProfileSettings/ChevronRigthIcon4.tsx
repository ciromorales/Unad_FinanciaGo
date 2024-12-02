import { memo, SVGProps } from 'react';

const ChevronRigthIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.25583 15.2558L0.0774999 14.0775L6.155 8L0.0774999 1.9225L1.25583 0.744167L8.51167 8L1.25583 15.2558Z'
      fill='#5264BF'
    />
  </svg>
);

const Memo = memo(ChevronRigthIcon4);
export { Memo as ChevronRigthIcon4 };
