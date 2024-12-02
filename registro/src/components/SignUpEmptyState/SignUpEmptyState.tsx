import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Facebook } from './Facebook/Facebook';
import { Google } from './Google/Google';
import { RightSideIcon } from './RightSideIcon';
import classes from './SignUpEmptyState.module.css';
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
/* @figmaId 14:694 */
export const SignUpEmptyState: FC<Props> = memo(function SignUpEmptyState(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
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
      <div className={classes.rectangle2}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.registrarse}>Registrarse</div>
      <div className={classes.registrarse2}>
        <div className={classes.textBlock}>
          <p></p>
        </div>
        <div className={classes.textBlock2}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>Registrarse</span>
          </p>
        </div>
      </div>
      <div className={classes.correoElectronico}>Correo Electronico</div>
      <div className={classes.yaTienesUnaCuentaIngresar}>
        <p className={classes.labelWrapper2}>
          <span className={classes.label2}>Ya tienes una cuenta</span>
          <span className={classes.label3}>?</span>
          <span className={classes.label4}> </span>
          <span className={classes.label5}>Ingresar</span>
        </p>
      </div>
      <div className={classes.mainideasGmailCom}>Mainideas@gmail.com</div>
      <div className={classes.contrasena}>Contraseña</div>
      <div className={classes.confirmarContrasena}>Confirmar Contraseña</div>
      <div className={classes.o}>o</div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
      <div className={classes.line4}></div>
      <div className={classes.line5}></div>
      <div className={classes.rectangle4}></div>
      <Google />
      <Facebook />
      <div className={classes.rectangle33}></div>
      <div className={classes.rectangle332}></div>
      <div className={classes.financiogo_logoRemovebgPreview}></div>
    </div>
  );
});
