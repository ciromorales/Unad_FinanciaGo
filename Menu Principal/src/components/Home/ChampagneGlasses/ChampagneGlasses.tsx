import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ChampagneGlasses.module.css';
import { ChampagneGlassesIcon } from './ChampagneGlassesIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 25:943 */
export const ChampagneGlasses: FC<Props> = memo(function ChampagneGlasses(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <ChampagneGlassesIcon className={classes.icon2} />}</div>
    </div>
  );
});
