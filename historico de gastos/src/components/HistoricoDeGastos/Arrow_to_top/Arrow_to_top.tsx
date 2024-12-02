import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Arrow_to_top.module.css';
import { ArrowToTopIcon } from './ArrowToTopIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    arrowToTop?: ReactNode;
  };
}
/* @figmaId 26:808 */
export const Arrow_to_top: FC<Props> = memo(function Arrow_to_top(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon_container}></div>
      <div className={classes.arrowToTop}>{props.swap?.arrowToTop || <ArrowToTopIcon className={classes.icon} />}</div>
    </div>
  );
});
