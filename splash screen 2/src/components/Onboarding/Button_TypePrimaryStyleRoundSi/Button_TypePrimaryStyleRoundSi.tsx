import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { AngleLeft } from '../AngleLeft/AngleLeft';
import { AngleRight } from '../AngleRight/AngleRight';
import { AngleLeftIcon } from './AngleLeftIcon';
import { AngleRightIcon } from './AngleRightIcon';
import classes from './Button_TypePrimaryStyleRoundSi.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    angleLeft?: boolean;
    angleRight?: boolean;
  };
  text?: {
    label?: ReactNode;
  };
}
/* @figmaId 1:315 */
export const Button_TypePrimaryStyleRoundSi: FC<Props> = memo(function Button_TypePrimaryStyleRoundSi(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.angleLeft && (
        <AngleLeft
          swap={{
            angleLeft: <AngleLeftIcon className={classes.icon} />,
          }}
        />
      )}
      {props.text?.label != null ? props.text?.label : <div className={classes.label}>Label</div>}
      {!props.hide?.angleRight && (
        <AngleRight
          swap={{
            angleRight: <AngleRightIcon className={classes.icon2} />,
          }}
        />
      )}
    </button>
  );
});
