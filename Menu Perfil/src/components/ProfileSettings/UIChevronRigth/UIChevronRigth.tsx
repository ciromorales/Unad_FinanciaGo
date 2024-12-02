import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ChevronRigthIcon } from './ChevronRigthIcon';
import classes from './UIChevronRigth.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    chevronRigth?: ReactNode;
  };
}
/* @figmaId 26:2626 */
export const UIChevronRigth: FC<Props> = memo(function UIChevronRigth(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.chevronRigth}>
        {props.swap?.chevronRigth || <ChevronRigthIcon className={classes.icon} />}
      </div>
    </div>
  );
});
