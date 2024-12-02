import { memo, SVGProps } from 'react';

const AddSquare2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12.375 8.99945H9M9 8.99945H5.625M9 8.99945V12.3745M9 8.99945L9 5.62445M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9Z'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(AddSquare2Icon);
export { Memo as AddSquare2Icon };
