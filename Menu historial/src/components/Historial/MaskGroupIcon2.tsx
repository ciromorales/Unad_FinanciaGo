import { memo, SVGProps } from 'react';

const MaskGroupIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 342 275' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <mask
      id='mask0_69_8319'
      style={{
        maskType: 'alpha',
      }}
      maskUnits='userSpaceOnUse'
      x={0}
      y={0}
      width={342}
      height={275}
    >
      <rect width={342} height={275} rx={50} fill='white' />
    </mask>
    <g mask='url(#mask0_69_8319)'>
      <path
        d='M-9 223.16C-9 223.16 5.60293 182.625 28 177.16C36.726 175.031 42.4208 179.82 51 177.16C64.9816 172.825 68.9324 162.374 77 150.16C88.9797 132.023 73.4799 104.329 94 97.1601C118.48 88.6072 118.37 129.469 134 150.16C157.021 180.636 155.55 235.66 193 228.16C215.209 223.712 191.552 175.257 202 155.16C210.304 139.187 229.596 152.477 245 143.16C256.027 136.49 265.435 146.025 278 143.16C297.537 138.705 301.039 113.401 321 115.16C334.414 116.342 351 132.16 351 132.16'
        stroke='#FF3E24'
        strokeWidth={2}
      />
      <path
        d='M28 177.16C5.60293 182.625 -9 223.16 -9 223.16V315H351V132.16C351 132.16 334.414 116.342 321 115.16C301.039 113.401 297.537 138.705 278 143.16C265.435 146.025 256.027 136.49 245 143.16C229.596 152.477 210.304 139.187 202 155.16C191.552 175.257 215.209 223.712 193 228.16C155.55 235.66 157.021 180.636 134 150.16C118.37 129.469 118.48 88.6072 94 97.1601C73.4799 104.329 88.9797 132.023 77 150.16C68.9324 162.374 64.9816 172.825 51 177.16C42.4208 179.82 36.7261 175.031 28 177.16Z'
        fill='url(#paint0_linear_69_8319)'
        stroke='#5164BE'
      />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_69_8319'
        x1={171}
        y1={141.691}
        x2={171}
        y2={336.27}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#5164BF' />
        <stop offset={1} stopColor='#5164BF' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(MaskGroupIcon2);
export { Memo as MaskGroupIcon2 };
