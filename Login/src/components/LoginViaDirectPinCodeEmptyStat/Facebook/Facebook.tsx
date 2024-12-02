import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { BgIcon } from './BgIcon';
import classes from './Facebook.module.css';
import { FIcon } from './FIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    bg?: ReactNode;
  };
}
/* @figmaId 14:662 */
export const Facebook: FC<Props> = memo(function Facebook(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.bg}>{props.swap?.bg || <BgIcon className={classes.icon} />}</div>
      <div className={classes.f}>
        <FIcon className={classes.icon2} />
      </div>
    </div>
  );
});
