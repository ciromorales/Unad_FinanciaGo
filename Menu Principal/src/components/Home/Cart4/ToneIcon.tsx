import { memo, SVGProps } from 'react';

const ToneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M16 0L13 9H1L0 0H16Z' fill='black' fillOpacity={0.15} />
    <path
      d='M14 14C14 15.1046 13.1046 16 12 16C10.8954 16 10 15.1046 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14Z'
      fill='black'
      fillOpacity={0.15}
    />
    <path
      d='M6 14C6 15.1046 5.10457 16 4 16C2.89543 16 2 15.1046 2 14C2 12.8954 2.89543 12 4 12C5.10457 12 6 12.8954 6 14Z'
      fill='black'
      fillOpacity={0.15}
    />
  </svg>
);

const Memo = memo(ToneIcon);
export { Memo as ToneIcon };
