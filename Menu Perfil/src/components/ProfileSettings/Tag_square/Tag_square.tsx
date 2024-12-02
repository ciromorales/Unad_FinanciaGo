import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Tag_square.module.css';
import { TagIcon } from './TagIcon';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    tag?: ReactNode;
    vector?: ReactNode;
  };
}
/* @figmaId 26:2628 */
export const Tag_square: FC<Props> = memo(function Tag_square(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon_container}></div>
      <div className={classes.tag}>{props.swap?.tag || <TagIcon className={classes.icon} />}</div>
      <div className={classes.vector}>{props.swap?.vector || <VectorIcon className={classes.icon2} />}</div>
    </div>
  );
});
