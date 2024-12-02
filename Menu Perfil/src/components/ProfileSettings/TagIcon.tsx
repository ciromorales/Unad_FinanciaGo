import { memo, SVGProps } from 'react';

const TagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M4.05624 1.58722C4.14422 1.49923 4.26185 1.44721 4.38614 1.44133L6.44202 1.34397C6.5616 1.33831 6.65934 1.43826 6.651 1.55768L6.51057 3.56853C6.50217 3.68881 6.45059 3.802 6.36534 3.88725L3.26166 6.99093C2.87113 7.38146 2.23797 7.38146 1.84745 6.99093L0.957089 6.10058C0.566565 5.71005 0.566565 5.07689 0.95709 4.68636L4.05624 1.58722Z'
      stroke='white'
    />
  </svg>
);

const Memo = memo(TagIcon);
export { Memo as TagIcon };
