import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Calendar.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  classes?: {
    rectangle101?: string;
    root?: string;
  };
  swap?: {
    vector?: ReactNode;
  };
}
/* @figmaId 26:2220 */
export const Calendar: FC<Props> = memo(function Calendar(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon_container}></div>
      <div className={classes.vector}>{props.swap?.vector || <VectorIcon className={classes.icon} />}</div>
      <div className={`${props.classes?.rectangle101 || ''} ${classes.rectangle101}`}></div>
    </div>
  );
});
