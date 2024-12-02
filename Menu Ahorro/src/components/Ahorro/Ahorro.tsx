import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AddSquare2 } from './AddSquare2/AddSquare2';
import { AddSquare2Icon } from './AddSquare2Icon';
import classes from './Ahorro.module.css';
import { Beach } from './Beach/Beach';
import { BeachIcon } from './BeachIcon';
import { CartIcon } from './CartIcon';
import { Chart } from './Chart/Chart';
import { Home } from './Home/Home';
import { MinusCircleContained } from './MinusCircleContained/MinusCircleContained';
import { MinusCircleContainedIcon } from './MinusCircleContainedIcon';
import { RightSideIcon } from './RightSideIcon';
import { SecurityVault } from './SecurityVault/SecurityVault';
import { SecurityVaultCrimeSecuritySecu } from './SecurityVaultCrimeSecuritySecu';
import { StatusBar_ThemeLight } from './StatusBar_ThemeLight/StatusBar_ThemeLight';
import { UnionIcon } from './UnionIcon';
import { UnionIcon2 } from './UnionIcon2';
import { UnionIcon3 } from './UnionIcon3';
import { User_2 } from './User_2/User_2';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { Wallet } from './Wallet/Wallet';

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
/* @figmaId 26:1514 */
export const Ahorro: FC<Props> = memo(function Ahorro(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.unnamed}>$ 0</div>
      <div className={classes._1Millon}>$ 1 millon</div>
      <div className={classes.ahorro}>Ahorro</div>
      <div className={classes.resumen}>Resumen</div>
      <div className={classes._50000}>$500.000</div>
      <div className={classes.rectangle170}></div>
      <div className={classes.rectangle169}></div>
      <div className={classes.rectangle172}></div>
      <div className={classes.rectangle171}></div>
      <Home
        className={classes.home}
        swap={{
          union: <UnionIcon className={classes.icon} />,
        }}
      />
      <User_2
        className={classes.user_2}
        swap={{
          union: <UnionIcon2 className={classes.icon2} />,
        }}
      />
      <Chart
        className={classes.chart}
        swap={{
          cart: <CartIcon className={classes.icon3} />,
        }}
      />
      <Wallet
        className={classes.wallet}
        swap={{
          union: <UnionIcon3 className={classes.icon4} />,
        }}
      />
      <div className={classes.vector}>
        <VectorIcon className={classes.icon10} />
      </div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon11} />
      </div>
      <div className={classes.rectangle173}></div>
      <StatusBar_ThemeLight
        className={classes.statusBar}
        classes={{ notch: classes.notch, rightSide: classes.rightSide }}
        swap={{
          rightSide: (
            <div className={classes.rightSide}>
              <RightSideIcon className={classes.icon5} />
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
      <AddSquare2
        className={classes.addSquare2}
        swap={{
          icon: <AddSquare2Icon className={classes.icon6} />,
        }}
      />
      <MinusCircleContained
        className={classes.minusCircleContained}
        swap={{
          icon: <MinusCircleContainedIcon className={classes.icon7} />,
        }}
      />
      <div className={classes.financiogo_logoRemovebgPreview}></div>
      <SecurityVault
        className={classes.securityVault}
        swap={{
          securityVaultCrimeSecuritySecu: <SecurityVaultCrimeSecuritySecu className={classes.icon8} />,
        }}
      />
      <div className={classes.rectangle2}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.configurarMeta}>Configurar Meta</div>
      <div className={classes.rectangle179}></div>
      <div className={classes.rectangle181}></div>
      <div className={classes.viajeASantaMarta}>Viaje a Santa Marta</div>
      <div className={classes._1Millon2}>1 Millon</div>
      <div className={classes._50}>50%</div>
      <Beach
        className={classes.beach}
        swap={{
          icon: <BeachIcon className={classes.icon9} />,
        }}
      />
      <div className={classes.meta1}></div>
    </div>
  );
});
