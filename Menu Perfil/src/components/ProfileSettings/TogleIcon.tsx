import { memo, SVGProps } from 'react';

const TogleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={40} height={21} rx={10.5} fill='#5164BF' />
    <g filter='url(#filter0_d_69_9209)'>
      <ellipse cx={29.1525} cy={10.5} rx={9.49153} ry={9.1875} fill='#F4F4F4' />
    </g>
    <defs>
      <filter
        id='filter0_d_69_9209'
        x={17.661}
        y={0.3125}
        width={22.9831}
        height={22.375}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix type='matrix' values='0 0 0 0 0.0308642 0 0 0 0 0 0 0 0 0 0.416667 0 0 0 0.1 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_69_9209' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_69_9209' result='shape' />
      </filter>
    </defs>
  </svg>
);

const Memo = memo(TogleIcon);
export { Memo as TogleIcon };
