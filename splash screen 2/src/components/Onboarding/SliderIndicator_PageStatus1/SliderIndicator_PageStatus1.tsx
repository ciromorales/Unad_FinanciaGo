import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './SliderIndicator_PageStatus1.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle1081?: string;
    rectangle1082?: string;
    rectangle1083?: string;
  };
}
/* @figmaId 1:245 */
export const SliderIndicator_PageStatus1: FC<Props> = memo(function SliderIndicator_PageStatus1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={`${props.classes?.rectangle1081 || ''} ${classes.rectangle1081}`}></div>
      <div className={`${props.classes?.rectangle1082 || ''} ${classes.rectangle1082}`}></div>
      <div className={`${props.classes?.rectangle1083 || ''} ${classes.rectangle1083}`}></div>
    </div>
  );
});
