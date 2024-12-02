import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Home1.module.css';
import { ShapeIcon } from './ShapeIcon';
import { ToneIcon } from './ToneIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 25:937 */
export const Home1: FC<Props> = memo(function Home1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.tone}>
        <ToneIcon className={classes.icon} />
      </div>
      <div className={classes.shape}>
        <ShapeIcon className={classes.icon2} />
      </div>
    </div>
  );
});
