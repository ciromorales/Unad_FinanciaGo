import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Beach.module.css';
import { BeachIcon } from './BeachIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 26:1987 */
export const Beach: FC<Props> = memo(function Beach(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <BeachIcon className={classes.icon2} />}</div>
    </div>
  );
});
