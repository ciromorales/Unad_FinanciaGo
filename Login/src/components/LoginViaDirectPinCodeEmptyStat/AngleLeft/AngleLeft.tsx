import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './AngleLeft.module.css';
import { AngleLeftIcon } from './AngleLeftIcon';

interface Props {
  className?: string;
}
/* @figmaId 1:19 */
export const AngleLeft: FC<Props> = memo(function AngleLeft(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.angleLeft}>
        <AngleLeftIcon className={classes.icon} />
      </div>
    </div>
  );
});
