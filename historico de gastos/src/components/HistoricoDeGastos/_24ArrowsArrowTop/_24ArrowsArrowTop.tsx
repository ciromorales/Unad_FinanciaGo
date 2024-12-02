import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './_24ArrowsArrowTop.module.css';
import { _24ArrowsArrowTopIcon } from './_24ArrowsArrowTopIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
  hide?: {
    icon?: boolean;
  };
}
/* @figmaId 26:2218 */
export const _24ArrowsArrowTop: FC<Props> = memo(function _24ArrowsArrowTop(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.icon && (
        <div className={classes.icon}>{props.swap?.icon || <_24ArrowsArrowTopIcon className={classes.icon2} />}</div>
      )}
    </div>
  );
});
