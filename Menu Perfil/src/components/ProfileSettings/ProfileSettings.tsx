import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Arrow_to_top } from './Arrow_to_top/Arrow_to_top';
import { ArrowToTopIcon } from './ArrowToTopIcon';
import { ChevronRigthIcon } from './ChevronRigthIcon';
import { ChevronRigthIcon2 } from './ChevronRigthIcon2';
import { ChevronRigthIcon3 } from './ChevronRigthIcon3';
import { ChevronRigthIcon4 } from './ChevronRigthIcon4';
import { Ellipse107Icon } from './Ellipse107Icon';
import classes from './ProfileSettings.module.css';
import { RightSideIcon } from './RightSideIcon';
import { StatusBar_ThemeLight } from './StatusBar_ThemeLight/StatusBar_ThemeLight';
import { Tag_square } from './Tag_square/Tag_square';
import { TagIcon } from './TagIcon';
import { TogleIcon } from './TogleIcon';
import { UIChevronRigth } from './UIChevronRigth/UIChevronRigth';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  hide?: {
    rectangle1?: boolean;
    leftTitleRight?: boolean;
  };
}
/* @figmaId 26:2640 */
export const ProfileSettings: FC<Props> = memo(function ProfileSettings(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.rectangle2}></div>
      <div className={classes.rectangle3}></div>
      <Arrow_to_top
        className={classes.arrow_to_top}
        swap={{
          arrowToTop: <ArrowToTopIcon className={classes.icon} />,
        }}
      />
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
          leftTitleRight: true,
        }}
      />
      <div className={classes.perfil}>Perfil</div>
      <div className={classes.configuracionDePerfil}>Configuración de Perfil</div>
      <div className={classes.container}></div>
      <UIChevronRigth
        className={classes.uIChevronRigth}
        swap={{
          chevronRigth: <ChevronRigthIcon className={classes.icon3} />,
        }}
      />
      <div className={classes.notificationSettings}>Notification Settings</div>
      <div className={classes.container2}></div>
      <UIChevronRigth
        className={classes.uIChevronRigth2}
        swap={{
          chevronRigth: <ChevronRigthIcon2 className={classes.icon4} />,
        }}
      />
      <div className={classes.language}>Language</div>
      <div className={classes.otros}>Otros</div>
      <div className={classes.container3}></div>
      <UIChevronRigth
        className={classes.uIChevronRigth3}
        swap={{
          chevronRigth: <ChevronRigthIcon3 className={classes.icon5} />,
        }}
      />
      <div className={classes.cambiePin}>Cambie Pin</div>
      <div className={classes.container4}></div>
      <div className={classes.togle}>
        <TogleIcon className={classes.icon9} />
      </div>
      <div className={classes.huella}>Huella</div>
      <div className={classes.container5}></div>
      <UIChevronRigth
        className={classes.uIChevronRigth4}
        swap={{
          chevronRigth: <ChevronRigthIcon4 className={classes.icon6} />,
        }}
      />
      <div className={classes.cambieContrasena}>Cambie Contraseña</div>
      <div className={classes.seguridad}>Seguridad</div>
      <div className={classes.container6}></div>
      <div className={classes.gothamRoad21}>Gotham Road 21...</div>
      <div className={classes.direccion}>Direccion</div>
      <div className={classes.container7}></div>
      <div className={classes._620932938232}>620932938232</div>
      <div className={classes.codigoDeCuenta}>Codigo de cuenta</div>
      <div className={classes.container8}></div>
      <div className={classes.aryanStirk2ndGmailCom}>aryan.stirk2nd@gmail.com</div>
      <div className={classes.email}>Email</div>
      <div className={classes.container9}></div>
      <div className={classes.aryanStirk2}>Aryan.Stirk2</div>
      <div className={classes.usuario}>Usuario</div>
      <div className={classes.container10}></div>
      <div className={classes._3024982387}>3024982387</div>
      <div className={classes.numeroDeTelefono}>Numero de Telefono</div>
      <div className={classes.informacionPersonal}>Información Personal</div>
      <div className={classes._57}></div>
      <div className={classes._39}></div>
      <div className={classes.ellipse107}>
        <Ellipse107Icon className={classes.icon10} />
      </div>
      <Tag_square
        className={classes.tag_square}
        swap={{
          tag: <TagIcon className={classes.icon7} />,
          vector: <VectorIcon className={classes.icon8} />,
        }}
      />
    </div>
  );
});
