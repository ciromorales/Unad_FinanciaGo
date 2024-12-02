import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BgIcon } from './BgIcon';
import { Facebook } from './Facebook/Facebook';
import { Google } from './Google/Google';
import classes from './LoginViaDirectPinCodeEmptyStat.module.css';
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
/* @figmaId 14:665 */
export const LoginViaDirectPinCodeEmptyStat: FC<Props> = memo(function LoginViaDirectPinCodeEmptyStat(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.rectangle2}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.ingresar}>Ingresar</div>
      <div className={classes.ingresar2}>
        <div className={classes.textBlock}>
          <p></p>
        </div>
        <div className={classes.textBlock2}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>Ingresar</span>
          </p>
        </div>
      </div>
      <div className={classes.tienesUnaCuentaRegistrate}>
        <p className={classes.labelWrapper2}>
          <span className={classes.label2}>Tienes una cuenta?</span>
          <span className={classes.label3}> </span>
          <span className={classes.label4}>Registrate</span>
        </p>
      </div>
      <div className={classes.correoElectronico}>Correo Electronico</div>
      <div className={classes.o}>o</div>
      <div className={classes.line2}></div>
      <div className={classes.line4}></div>
      <div className={classes.line5}></div>
      <div className={classes.rectangle4}></div>
      <Google className={classes.google} />
      <Facebook
        className={classes.facebook}
        swap={{
          bg: <BgIcon className={classes.icon} />,
        }}
      />
      <div className={classes.contrasena}>Contraseña</div>
      <div className={classes.line6}></div>
      <div className={classes.rectangle33}></div>
      <div className={classes.financiogo_logoRemovebgPreview}></div>
      <StatusBar_ThemeLight
        className={classes.statusBar}
        classes={{ notch: classes.notch, rightSide: classes.rightSide }}
        swap={{
          rightSide: (
            <div className={classes.rightSide}>
              <RightSideIcon className={classes.icon2} />
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
    </div>
  );
});
