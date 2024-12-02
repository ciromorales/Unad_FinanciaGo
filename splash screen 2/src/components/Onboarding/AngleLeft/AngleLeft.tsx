import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './AngleLeft.module.css';
import { AngleLeftIcon } from './AngleLeftIcon';

interface Props {
  className?: string;
  swap?: {
    angleLeft?: ReactNode;
  };
}
/* @figmaId 1:19 */
export const AngleLeft: FC<Props> = memo(function AngleLeft(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.angleLeft}>{props.swap?.angleLeft || <AngleLeftIcon className={classes.icon} />}</div>
    </div>
  );
});
