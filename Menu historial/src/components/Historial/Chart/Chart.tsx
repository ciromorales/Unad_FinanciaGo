import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { CartIcon } from './CartIcon';
import classes from './Chart.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    cart?: ReactNode;
  };
}
/* @figmaId 22:986 */
export const Chart: FC<Props> = memo(function Chart(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon_container}></div>
      <div className={classes.cart}>{props.swap?.cart || <CartIcon className={classes.icon} />}</div>
    </div>
  );
});
