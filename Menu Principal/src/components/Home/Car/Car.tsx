import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Car.module.css';
import { CarIcon } from './CarIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 25:927 */
export const Car: FC<Props> = memo(function Car(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>
        <CarIcon className={classes.icon2} />
      </div>
    </div>
  );
});
