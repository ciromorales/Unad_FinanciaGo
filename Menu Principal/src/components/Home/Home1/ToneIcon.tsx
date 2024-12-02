import { memo, SVGProps } from 'react';

const ToneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M-7.62939e-06 7L8 0L16 7L16 17H11V13C11 12.2044 10.6839 11.4413 10.1213 10.8787C9.55871 10.3161 8.79565 10 8 10C7.20435 10 6.44129 10.3161 5.87868 10.8787C5.31607 11.4413 5 12.2043 5 13V17H-3.28631e-06L-7.62939e-06 7Z'
      fill='black'
      fillOpacity={0.15}
    />
  </svg>
);

const Memo = memo(ToneIcon);
export { Memo as ToneIcon };
