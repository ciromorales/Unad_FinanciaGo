import { memo, SVGProps } from 'react';

const Rectangle25Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.857953 1.84661C0.938107 0.804614 1.80699 0 2.85206 0H13.1479C14.193 0 15.0619 0.804613 15.142 1.84661L15.6687 8.69321C15.8474 11.0164 14.0105 13 11.6805 13H4.31951C1.98947 13 0.152585 11.0164 0.331291 8.69321L0.857953 1.84661Z'
      stroke='black'
      strokeWidth={2}
    />
  </svg>
);

const Memo = memo(Rectangle25Icon);
export { Memo as Rectangle25Icon };
