import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { UnionIcon } from './UnionIcon';
import classes from './User_2.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    union?: ReactNode;
  };
}
/* @figmaId 22:976 */
export const User_2: FC<Props> = memo(function User_2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon_container}></div>
      <div className={classes.union}>{props.swap?.union || <UnionIcon className={classes.icon} />}</div>
    </div>
  );
});
