import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { UnionIcon } from './UnionIcon';
import classes from './Wallet.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    union?: ReactNode;
  };
}
/* @figmaId 22:996 */
export const Wallet: FC<Props> = memo(function Wallet(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon_container}></div>
      <div className={classes.union}>{props.swap?.union || <UnionIcon className={classes.icon} />}</div>
    </div>
  );
});
