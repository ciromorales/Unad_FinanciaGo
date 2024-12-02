import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ClipPathGroupIcon } from './ClipPathGroupIcon';
import classes from './Trust.module.css';

interface Props {
  className?: string;
  swap?: {
    clipPathGroup?: ReactNode;
  };
}
/* @figmaId 1:96 */
export const Trust: FC<Props> = memo(function Trust(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.clipPathGroup}>
        {props.swap?.clipPathGroup || <ClipPathGroupIcon className={classes.icon} />}
      </div>
    </div>
  );
});
