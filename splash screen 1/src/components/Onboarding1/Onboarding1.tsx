import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Onboarding1.module.css';
import { RightSideIcon } from './RightSideIcon';
import { StatusBar_ThemeLight } from './StatusBar_ThemeLight/StatusBar_ThemeLight';

interface Props {
  className?: string;
  hide?: {
    rectangle1?: boolean;
    angleLeft?: boolean;
    LeftTitle?: boolean;
    Title?: boolean;
    RightTitle?: boolean;
  };
}
/* @figmaId 29:3245 */
export const Onboarding1: FC<Props> = memo(function Onboarding1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.rectangle2}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.comencemos}>Comencemos</div>
      <div className={classes.bienvenidoAFinanciaGo}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Bienvenido a</span>
        </p>
        <p className={classes.labelWrapper2}>
          <span className={classes.label2}>FinanciaGo</span>
        </p>
      </div>
      <div className={classes.laMejorFormaDeHacerSeguimiento}>
        <div className={classes.textBlock}>La mejor forma de hacer seguimiento a tus </div>
        <div className={classes.textBlock2}>gastos y cumplir tus metas de Ahorros</div>
      </div>
      <StatusBar_ThemeLight
        className={classes.statusBar}
        classes={{ notch: classes.notch, rightSide: classes.rightSide }}
        swap={{
          rightSide: (
            <div className={classes.rightSide}>
              <RightSideIcon className={classes.icon} />
            </div>
          ),
        }}
        hide={{
          rectangle1: true,
          angleLeft: true,
          LeftTitle: true,
          Title: true,
          RightTitle: true,
        }}
      />
      <div className={classes.financiogo_logoRemovebgPreview}></div>
    </div>
  );
});
