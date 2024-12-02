import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Rectangle25Icon } from './Rectangle25Icon';
import { Rectangle26Icon } from './Rectangle26Icon';
import classes from './Shopping_bag.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    rectangle25?: ReactNode;
    rectangle26?: ReactNode;
  };
}
/* @figmaId 26:1377 */
export const Shopping_bag: FC<Props> = memo(function Shopping_bag(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle25}>
        {props.swap?.rectangle25 || <Rectangle25Icon className={classes.icon} />}
      </div>
      <div className={classes.rectangle26}>
        {props.swap?.rectangle26 || <Rectangle26Icon className={classes.icon2} />}
      </div>
    </div>
  );
});
