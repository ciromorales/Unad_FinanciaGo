import { memo, SVGProps } from 'react';

const CarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 9.5V7.17073C0 6.03922 0.895431 5.12195 2 5.12195M0 9.5C0 10.6315 0.895431 11.5488 2 11.5488H14C15.1046 11.5488 16 10.6315 16 9.5M0 9.5V12.6341C0 13.3885 0.596954 14 1.33333 14H2.66667C3.40305 14 4 13.3885 4 12.6341V11.5488M16 9.5V7.17073C16 6.03922 15.1046 5.12195 14 5.12195H2M16 9.5V12.6341C16 13.3885 15.403 14 14.6667 14H13.3333C12.597 14 12 13.3885 12 12.6341V11.5488M2 5.12195L3.06939 1.01392C3.22504 0.416017 3.75364 0 4.3577 0H11.7057C12.2796 0 12.7891 0.376197 12.9706 0.933933L14.3333 5.12195M2.33333 8.19512H4.66667M11.3333 8.19512H13.6667'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(CarIcon);
export { Memo as CarIcon };
