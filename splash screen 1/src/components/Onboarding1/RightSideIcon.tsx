import { memo, SVGProps } from 'react';

const RightSideIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 67 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      opacity={0.35}
      fillRule='evenodd'
      clipRule='evenodd'
      d='M42.334 2.66959C42.334 1.19683 43.5279 0.00292969 45.0007 0.00292969H61.6673C63.1401 0.00292969 64.334 1.19684 64.334 2.6696V8.6696C64.334 10.1424 63.1401 11.3363 61.6673 11.3363H45.0006C43.5279 11.3363 42.334 10.1424 42.334 8.6696V2.66959Z'
      stroke='#121212'
    />
    <path
      opacity={0.4}
      d='M65.334 3.6696V7.6696C66.1387 7.33082 66.662 6.54273 66.662 5.6696C66.662 4.79646 66.1387 4.00837 65.334 3.6696'
      fill='#121212'
    />
    <path
      d='M44.334 3.33626C44.334 2.59988 44.9309 2.00293 45.6673 2.00293H61.0007C61.737 2.00293 62.334 2.59988 62.334 3.33626V8.00293C62.334 8.73931 61.737 9.33626 61.0007 9.33626H45.6673C44.9309 9.33626 44.334 8.73931 44.334 8.00293V3.33626Z'
      fill='#121212'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M29.6639 2.27733C31.8798 2.27742 34.011 3.12886 35.6169 4.65566C35.7379 4.77354 35.9312 4.77205 36.0503 4.65233L37.2063 3.48566C37.2666 3.42494 37.3002 3.34269 37.2997 3.25711C37.2992 3.17153 37.2646 3.08967 37.2036 3.02966C32.9885 -1.00989 26.3387 -1.00989 22.1236 3.02966C22.0626 3.08963 22.0279 3.17146 22.0274 3.25704C22.0268 3.34262 22.0604 3.42489 22.1206 3.48566L23.2769 4.65233C23.396 4.77223 23.5894 4.77372 23.7103 4.65566C25.3164 3.12876 27.4478 2.27732 29.6639 2.27733ZM29.6647 6.07302C30.8822 6.07295 32.0563 6.52548 32.9587 7.34269C33.0808 7.45867 33.2731 7.45615 33.3921 7.33702L34.5467 6.17035C34.6075 6.10916 34.6413 6.02614 34.6404 5.93988C34.6395 5.85361 34.6041 5.7713 34.5421 5.71135C31.7939 3.15497 27.5379 3.15497 24.7897 5.71135C24.7277 5.7713 24.6922 5.85365 24.6914 5.93995C24.6906 6.02624 24.7245 6.10925 24.7854 6.17035L25.9397 7.33702C26.0587 7.45615 26.251 7.45867 26.3731 7.34269C27.2749 6.52602 28.448 6.07352 29.6647 6.07302ZM31.9778 8.62683C31.9796 8.71334 31.9455 8.79674 31.8838 8.85735L29.8865 10.873C29.8279 10.9323 29.7481 10.9656 29.6648 10.9656C29.5815 10.9656 29.5017 10.9323 29.4431 10.873L27.4455 8.85735C27.3838 8.7967 27.3498 8.71327 27.3516 8.62676C27.3535 8.54026 27.3909 8.45834 27.4551 8.40035C28.7307 7.32147 30.5989 7.32147 31.8745 8.40035C31.9386 8.45838 31.976 8.54033 31.9778 8.62683Z'
      fill='#121212'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16 0.335938H15C14.4477 0.335938 14 0.783653 14 1.33594V10.0026C14 10.5549 14.4477 11.0026 15 11.0026H16C16.5523 11.0026 17 10.5549 17 10.0026V1.33594C17 0.783653 16.5523 0.335938 16 0.335938ZM10.334 2.66931H11.334C11.8863 2.66931 12.334 3.11703 12.334 3.66931V10.0026C12.334 10.5549 11.8863 11.0026 11.334 11.0026H10.334C9.7817 11.0026 9.33398 10.5549 9.33398 10.0026V3.66931C9.33398 3.11703 9.7817 2.66931 10.334 2.66931ZM6.66602 5.00256H5.66602C5.11373 5.00256 4.66602 5.45028 4.66602 6.00256V10.0026C4.66602 10.5548 5.11373 11.0026 5.66602 11.0026H6.66602C7.2183 11.0026 7.66602 10.5548 7.66602 10.0026V6.00256C7.66602 5.45028 7.2183 5.00256 6.66602 5.00256ZM2 7.0026H1C0.447715 7.0026 0 7.45032 0 8.0026V10.0026C0 10.5549 0.447715 11.0026 1 11.0026H2C2.55228 11.0026 3 10.5549 3 10.0026V8.0026C3 7.45032 2.55228 7.0026 2 7.0026Z'
      fill='#121212'
    />
  </svg>
);

const Memo = memo(RightSideIcon);
export { Memo as RightSideIcon };
