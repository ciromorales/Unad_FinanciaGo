import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './AngleRight.module.css';
import { AngleRightIcon } from './AngleRightIcon';

interface Props {
  className?: string;
  swap?: {
    angleRight?: ReactNode;
  };
}
/* @figmaId 1:257 */
export const AngleRight: FC<Props> = memo(function AngleRight(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.angleRight}>{props.swap?.angleRight || <AngleRightIcon className={classes.icon} />}</div>
    </div>
  );
});
