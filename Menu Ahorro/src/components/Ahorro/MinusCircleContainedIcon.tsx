import { memo, SVGProps } from 'react';

const MinusCircleContainedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 61 61' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M19.3906 30.5H41.6094M60.125 30.5C60.125 46.8614 46.8614 60.125 30.5 60.125C14.1386 60.125 0.875 46.8614 0.875 30.5C0.875 14.1386 14.1386 0.875 30.5 0.875C46.8614 0.875 60.125 14.1386 60.125 30.5Z'
      stroke='#5164BF'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(MinusCircleContainedIcon);
export { Memo as MinusCircleContainedIcon };
