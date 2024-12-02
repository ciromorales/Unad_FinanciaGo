import { memo, SVGProps } from 'react';

const AngleLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.00002 15.75C7.80802 15.75 7.61599 15.6771 7.46999 15.5301L0.469994 8.53005C0.176994 8.23705 0.176994 7.76202 0.469994 7.46902L7.46999 0.469018C7.76299 0.176018 8.23803 0.176018 8.53103 0.469018C8.82403 0.762018 8.82403 1.23705 8.53103 1.53005L2.06106 8.00002L8.53103 14.47C8.82403 14.763 8.82403 15.238 8.53103 15.531C8.38403 15.677 8.19202 15.75 8.00002 15.75Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(AngleLeftIcon);
export { Memo as AngleLeftIcon };