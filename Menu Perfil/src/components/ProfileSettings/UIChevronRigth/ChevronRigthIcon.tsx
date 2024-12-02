import { memo, SVGProps } from 'react';

const ChevronRigthIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.707 17.707L0.293 16.293L7.586 9L0.293 1.707L1.707 0.293L10.414 9L1.707 17.707Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(ChevronRigthIcon);
export { Memo as ChevronRigthIcon };
