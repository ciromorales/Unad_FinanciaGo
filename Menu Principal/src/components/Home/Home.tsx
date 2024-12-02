import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AddSquare2 } from './AddSquare2/AddSquare2';
import { AddSquare2Icon } from './AddSquare2Icon';
import { Car } from './Car/Car';
import { Cart4 } from './Cart4/Cart4';
import { CartIcon } from './CartIcon';
import { ChampagneGlasses } from './ChampagneGlasses/ChampagneGlasses';
import { ChampagneGlassesIcon } from './ChampagneGlassesIcon';
import { Chart } from './Chart/Chart';
import { Home1 } from './Home1/Home1';
import { Home2 } from './Home2/Home2';
import classes from './Home.module.css';
import { MinusCircleContained } from './MinusCircleContained/MinusCircleContained';
import { MinusCircleContainedIcon } from './MinusCircleContainedIcon';
import { RightSideIcon } from './RightSideIcon';
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
/* @figmaId 22:1016 */
export const Home: FC<Props> = memo(function Home(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.gastos}>Gastos</div>
      <div className={classes.resumen}>Resumen</div>
      <div className={classes._1576150}>$1.576.150</div>
      <div className={classes.rectangle170}></div>
      <div className={classes.rectangle169}></div>
      <div className={classes.rectangle172}></div>
      <div className={classes.rectangle171}></div>
      <Home2
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
      <div className={classes.verTodo}>Ver todo</div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon9} />
      </div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon10} />
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
      <div className={classes.torta1}></div>
      <AddSquare2
        className={classes.addSquare2}
        swap={{
          icon: <AddSquare2Icon className={classes.icon6} />,
        }}
      />
      <Car className={classes.car} />
      <Cart4 className={classes.cart4} />
      <Home1 className={classes.home1} />
      <MinusCircleContained
        className={classes.minusCircleContained}
        swap={{
          icon: <MinusCircleContainedIcon className={classes.icon7} />,
        }}
      />
      <ChampagneGlasses
        className={classes.champagneGlasses}
        swap={{
          icon: <ChampagneGlassesIcon className={classes.icon8} />,
        }}
      />
      <div className={classes.financiogo_logoRemovebgPreview}></div>
    </div>
  );
});
