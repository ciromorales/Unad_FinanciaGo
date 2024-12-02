import { memo, SVGProps } from 'react';

const Rectangle26Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6 8V3C6 1.34315 4.65685 0 3 0V0C1.34315 0 0 1.34315 0 3V8'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(Rectangle26Icon);
export { Memo as Rectangle26Icon };
