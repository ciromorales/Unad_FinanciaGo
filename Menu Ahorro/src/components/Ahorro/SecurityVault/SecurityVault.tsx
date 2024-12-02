import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './SecurityVault.module.css';
import { SecurityVaultCrimeSecuritySecu } from './SecurityVaultCrimeSecuritySecu';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    securityVaultCrimeSecuritySecu?: ReactNode;
  };
}
/* @figmaId 26:1627 */
export const SecurityVault: FC<Props> = memo(function SecurityVault(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.securityVaultCrimeSecuritySecu}>
        {props.swap?.securityVaultCrimeSecuritySecu || <SecurityVaultCrimeSecuritySecu className={classes.icon} />}
      </div>
    </div>
  );
});
