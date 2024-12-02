import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './HomeIndicator_DarkModeFalse.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 1:10 */
export const HomeIndicator_DarkModeFalse: FC<Props> = memo(function HomeIndicator_DarkModeFalse(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.homeIndicator}></div>
    </div>
  );
});
