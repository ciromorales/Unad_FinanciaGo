import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './MinusCircleContained.module.css';
import { MinusCircleContainedIcon } from './MinusCircleContainedIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 25:919 */
export const MinusCircleContained: FC<Props> = memo(function MinusCircleContained(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <MinusCircleContainedIcon className={classes.icon2} />}</div>
    </div>
  );
});
