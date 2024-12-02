import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { AngleLeft } from '../AngleLeft/AngleLeft';
import { RightSideIcon } from './RightSideIcon';
import classes from './StatusBar_ThemeLight.module.css';
import { TimeLightBaseIcon } from './TimeLightBaseIcon';

interface Props {
  className?: string;
  classes?: {
    notch?: string;
  };
  hide?: {
    rectangle1?: boolean;
    angleLeft?: boolean;
    LeftTitle?: boolean;
    Title?: boolean;
    RightTitle?: boolean;
  };
}
/* @figmaId 1:28 */
export const StatusBar_ThemeLight: FC<Props> = memo(function StatusBar_ThemeLight(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.topStatusBar}>
        <div className={classes.rightSide}>
          <RightSideIcon className={classes.icon} />
        </div>
        <div className={classes.timeLightBase}>
          <TimeLightBaseIcon className={classes.icon2} />
        </div>
        {!props.hide?.rectangle1 && <div className={classes.rectangle1}></div>}
      </div>
      <div className={classes.leftTitleRight}>
        <div className={classes.LeftAccessory}>
          {!props.hide?.angleLeft && <AngleLeft />}
          {!props.hide?.LeftTitle && <div className={classes.LeftTitle}>Left Title</div>}
        </div>
        {!props.hide?.Title && (
          <div className={classes.Title}>
            <div className={classes.Title2}>Title</div>
          </div>
        )}
        <div className={classes.RightAccessory}>
          {!props.hide?.RightTitle && <div className={classes.RightTitle}>Right Title</div>}
        </div>
      </div>
    </div>
  );
});
