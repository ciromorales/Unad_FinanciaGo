import { memo, SVGProps } from 'react';

const BeachIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.7284 7.05236C15.6894 7.06269 15.6504 7.07353 15.6115 7.08486C14.535 7.39873 13.6015 8.07799 12.9718 9.00581C12.4733 9.74021 11.4738 9.93146 10.7394 9.43296C10.005 8.93447 9.81379 7.93502 10.3123 7.20062C11.3619 5.65429 12.9176 4.52216 14.7118 3.99906C15.155 3.86985 15.6058 3.77981 16.0594 3.72859C15.2544 3.28509 14.3164 3.13725 13.4097 3.31579C12.5388 3.48726 11.6938 2.92031 11.5223 2.04942C11.3508 1.17854 11.9178 0.333542 12.7887 0.162059C14.5815 -0.190972 16.4415 0.157248 17.9853 1.13495C18.9582 1.75111 19.7587 2.58769 20.3297 3.56563C21.4092 3.16209 22.5752 3.00737 23.7392 3.12506C25.5731 3.31044 27.276 4.15892 28.5283 5.51119C29.1315 6.16241 29.0925 7.17924 28.4413 7.78236C27.7901 8.38547 26.7731 8.34645 26.1701 7.69524C25.4499 6.91759 24.4706 6.42964 23.4161 6.32304L23.4045 6.32188C23.6955 6.63733 23.9593 6.9807 24.1914 7.34886C25.1691 8.90119 25.5056 10.7729 25.1293 12.5685C24.9474 13.4373 24.0954 13.9939 23.2266 13.8119C22.3579 13.6299 21.8012 12.778 21.9834 11.9093C22.1886 10.9298 22.0052 9.90891 21.4716 9.06221C21.0455 8.38569 20.4225 7.86268 19.6935 7.55848C18.7786 8.18374 18.0088 9.20753 17.424 10.6237C16.8415 12.0343 16.4805 13.7505 16.3445 15.6214C17.5173 15.9182 18.6549 16.4065 19.7293 17.0738C21.3893 18.1048 22.8583 19.5378 24.0664 21.2749C23.376 21.4601 22.6241 21.858 22.1216 22.653C21.9356 22.947 21.7451 23.1874 21.5589 23.3784C20.7528 24.2038 19.3315 24.2038 18.5254 23.3784C18.3667 23.2157 18.2046 23.0171 18.0447 22.779C17.2151 21.5443 15.7827 21.2763 14.9334 21.2763C14.0842 21.2763 12.6517 21.5443 11.8222 22.779C11.6622 23.0171 11.5001 23.2157 11.3415 23.3784C10.5354 24.2038 9.11411 24.2038 8.30803 23.3784C8.12179 23.1874 7.93121 22.947 7.74525 22.653C6.95016 21.3951 5.53078 21.1315 4.71836 21.1313C4.27796 21.1312 3.66664 21.2079 3.07127 21.4721C4.30451 19.6461 5.82122 18.1436 7.54356 17.0738C9.28474 15.9923 11.1922 15.3811 13.1458 15.2932C13.3061 13.1968 13.7226 11.166 14.453 9.39699C14.7971 8.56376 15.219 7.77054 15.7284 7.05236ZM6.19318 24.6208C5.93867 24.027 5.35337 23.6434 4.70736 23.6469C4.06138 23.6503 3.48024 24.0403 3.23214 24.6369C3.04986 25.0751 2.77226 25.467 2.4195 25.7846C2.06674 26.1019 1.64767 26.337 1.19277 26.4722C0.341981 26.7253 -0.142639 27.6199 0.110338 28.4706C0.363315 29.3216 1.25809 29.8061 2.10888 29.5532C3.02145 29.2819 3.86209 28.8105 4.56975 28.1736C4.61876 28.1295 4.66704 28.0847 4.71459 28.0393C5.08519 28.4012 5.49863 28.7209 5.94797 28.9905C8.19126 30.3366 11.4581 30.3366 13.7014 28.9905C14.1502 28.7214 14.5631 28.4021 14.9334 28.0406C15.3036 28.4021 15.7166 28.7214 16.1653 28.9905C18.4086 30.3366 21.6754 30.3366 23.9188 28.9905C24.3681 28.7209 24.7815 28.4012 25.1522 28.0393C25.1998 28.0847 25.248 28.1295 25.2971 28.1736C26.0046 28.8105 26.8453 29.2819 27.7579 29.5532C28.6086 29.8061 29.5035 29.3216 29.7564 28.4706C30.0094 27.6199 29.5247 26.7253 28.674 26.4722C28.2191 26.337 27.7999 26.1019 27.4472 25.7846C27.0945 25.467 26.8168 25.0751 26.6346 24.6369C26.3865 24.0403 25.8054 23.6503 25.1593 23.6469C24.5134 23.6434 23.928 24.027 23.6736 24.6208C23.3852 25.2934 22.8924 25.8579 22.2649 26.2344C21.0396 26.9696 19.0444 26.9696 17.8191 26.2344C17.1916 25.8579 16.6988 25.2934 16.4105 24.6208C16.1572 24.03 15.5762 23.6469 14.9334 23.6469C14.2905 23.6469 13.7095 24.03 13.4562 24.6208C13.1679 25.2934 12.6751 25.8579 12.0477 26.2344C10.8223 26.9696 8.82709 26.9696 7.60172 26.2344C6.97429 25.8579 6.48146 25.2934 6.19318 24.6208Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(BeachIcon);
export { Memo as BeachIcon };