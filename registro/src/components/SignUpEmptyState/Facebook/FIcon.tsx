import { memo, SVGProps } from 'react';

const FIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 42' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M21.7757 23.0279L22.9417 15.6189H15.6473V10.8131C15.6473 8.78569 16.6644 6.80825 19.9315 6.80825H23.25V0.500607C23.25 0.500607 20.2397 0 17.363 0C11.3528 0 7.42812 3.54926 7.42812 9.97209V15.6189H0.75V23.0279H7.42812V40.9397C8.76883 41.1449 10.1404 41.25 11.5377 41.25C12.935 41.25 14.3066 41.1449 15.6473 40.9397V23.0279H21.7757Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(FIcon);
export { Memo as FIcon };
