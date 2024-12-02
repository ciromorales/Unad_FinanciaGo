import { memo, SVGProps } from 'react';

const AngleRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.00002 15.75C0.808023 15.75 0.615994 15.6771 0.469994 15.5301C0.176994 15.2371 0.176994 14.762 0.469994 14.469L6.93996 7.99905L0.469994 1.52908C0.176994 1.23608 0.176994 0.761041 0.469994 0.468041C0.762994 0.175041 1.23803 0.175041 1.53103 0.468041L8.53103 7.46804C8.82403 7.76104 8.82403 8.23608 8.53103 8.52908L1.53103 15.5291C1.38403 15.6771 1.19202 15.75 1.00002 15.75Z'
      fill='#2A2A2A'
    />
  </svg>
);

const Memo = memo(AngleRightIcon);
export { Memo as AngleRightIcon };
