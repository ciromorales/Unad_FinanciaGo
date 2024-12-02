import { memo, SVGProps } from 'react';

const BgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 54 54' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={27} cy={27} r={26.25} fill='url(#paint0_linear_69_5792)' />
    <defs>
      <linearGradient id='paint0_linear_69_5792' x1={27} y1={0.75} x2={27} y2={53.0943} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#18ACFE' />
        <stop offset={1} stopColor='#0163E0' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(BgIcon);
export { Memo as BgIcon };
