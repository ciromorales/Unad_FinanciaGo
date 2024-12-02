import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { BgIcon } from './BgIcon';
import classes from './Facebook.module.css';
import { FIcon } from './FIcon';

interface Props {
  className?: string;
}
/* @figmaId 14:720 */
export const Facebook: FC<Props> = memo(function Facebook(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.bg}>
        <BgIcon className={classes.icon} />
      </div>
      <div className={classes.f}>
        <FIcon className={classes.icon2} />
      </div>
    </div>
  );
});
