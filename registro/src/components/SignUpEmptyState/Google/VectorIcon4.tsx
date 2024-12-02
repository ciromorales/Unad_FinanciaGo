import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 23 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.2863 5.4133C15.9688 5.4133 17.7783 6.54885 18.8101 7.4978L22.8418 3.64C20.3657 1.38445 17.1434 0 13.2863 0C7.69896 0 2.87354 3.1422 0.524353 7.71549L5.14339 11.2311C6.30223 7.85555 9.50856 5.4133 13.2863 5.4133'
      fill='#EB4335'
    />
  </svg>
);

const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
