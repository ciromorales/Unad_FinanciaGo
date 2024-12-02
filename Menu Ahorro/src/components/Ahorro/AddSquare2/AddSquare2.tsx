import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './AddSquare2.module.css';
import { AddSquare2Icon } from './AddSquare2Icon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 25:923 */
export const AddSquare2: FC<Props> = memo(function AddSquare2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <AddSquare2Icon className={classes.icon2} />}</div>
    </div>
  );
});
