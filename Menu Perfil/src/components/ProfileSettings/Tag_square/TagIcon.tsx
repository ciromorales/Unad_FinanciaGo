import { memo, SVGProps } from 'react';

const TagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 13 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.62265 3.33756C6.71063 3.24957 6.82826 3.19755 6.95255 3.19167L10.7754 3.01064C10.8949 3.00498 10.9927 3.10492 10.9843 3.22435L10.7231 6.96499C10.7147 7.08527 10.6631 7.19846 10.5779 7.28371L4.65777 13.2038C4.26724 13.5943 3.63408 13.5943 3.24355 13.2038L0.707078 10.6673C0.316554 10.2768 0.316553 9.64365 0.707078 9.25313L6.62265 3.33756Z'
      stroke='black'
      strokeWidth={2}
    />
  </svg>
);

const Memo = memo(TagIcon);
export { Memo as TagIcon };
