import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Home.module.css';
import { UnionIcon } from './UnionIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    union?: ReactNode;
  };
}
/* @figmaId 22:964 */
export const Home: FC<Props> = memo(function Home(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.container}></div>
      <div className={classes.union}>{props.swap?.union || <UnionIcon className={classes.icon} />}</div>
    </div>
  );
});
