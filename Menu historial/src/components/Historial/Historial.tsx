import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _24ArrowsArrowTop } from './_24ArrowsArrowTop/_24ArrowsArrowTop';
import { _24ArrowsArrowTopIcon } from './_24ArrowsArrowTopIcon';
import { AngleLeft } from './AngleLeft/AngleLeft';
import { Calendar } from './Calendar/Calendar';
import { CartIcon } from './CartIcon';
import { CartIcon2 } from './CartIcon2';
import { CartIcon3 } from './CartIcon3';
import { Chart } from './Chart/Chart';
import { ChevronDownIcon } from './ChevronDownIcon';
import { ChevronDownIcon2 } from './ChevronDownIcon2';
import { Ellipse106Icon } from './Ellipse106Icon';
import { Ellipse106Icon2 } from './Ellipse106Icon2';
import classes from './Historial.module.css';
import { Home } from './Home/Home';
import { MaskGroupIcon } from './MaskGroupIcon';
import { MaskGroupIcon2 } from './MaskGroupIcon2';
import { RightSideIcon } from './RightSideIcon';
import { StatusBar_ThemeLight } from './StatusBar_ThemeLight/StatusBar_ThemeLight';
import { UnionIcon } from './UnionIcon';
import { UnionIcon2 } from './UnionIcon2';
import { UnionIcon3 } from './UnionIcon3';
import { User_2 } from './User_2/User_2';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';
import { Wallet } from './Wallet/Wallet';

interface Props {
  className?: string;
  hide?: {
    rectangle1?: boolean;
    leftTitleRight?: boolean;
  };
}
/* @figmaId 26:2231 */
export const Historial: FC<Props> = memo(function Historial(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle187}></div>
      <div className={classes.rectangle1}></div>
      <div className={classes.historial}>Historial</div>
      <div className={classes.rectangle188}></div>
      <div className={classes.rectangle1872}></div>
      <div className={classes.maskGroup}>
        <MaskGroupIcon className={classes.icon11} />
      </div>
      <div className={classes.rectangle186}></div>
      <div className={classes.rectangle1882}></div>
      <div className={classes.ellipse106}>
        <Ellipse106Icon className={classes.icon12} />
      </div>
      <div className={classes._35600}>$35.600</div>
      <div className={classes._1016Nov}>10 - 16 Nov</div>
      <Calendar
        className={classes.calendar}
        classes={{ rectangle101: classes.rectangle101 }}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
        }}
      />
      <Chart
        className={classes.chart}
        swap={{
          cart: <CartIcon className={classes.icon2} />,
        }}
      />
      <div className={classes.rectangle1883}></div>
      <div className={classes.rectangle1873}></div>
      <div className={classes.maskGroup2}>
        <MaskGroupIcon2 className={classes.icon13} />
      </div>
      <div className={classes.rectangle1862}></div>
      <div className={classes.ellipse1062}>
        <Ellipse106Icon2 className={classes.icon14} />
      </div>
      <div className={classes._1584}>$15.84</div>
      <div className={classes.rectangle1884}></div>
      <_24ArrowsArrowTop
        className={classes._24ArrowsArrowTop}
        swap={{
          icon: <_24ArrowsArrowTopIcon className={classes.icon3} />,
        }}
      />
      <div className={classes._1016Nov2}>10 - 16 Nov</div>
      <Calendar
        className={classes.calendar2}
        classes={{ rectangle101: classes.rectangle1012 }}
        swap={{
          vector: <VectorIcon2 className={classes.icon4} />,
        }}
      />
      <Chart
        className={classes.chart2}
        swap={{
          cart: <CartIcon2 className={classes.icon5} />,
        }}
      />
      <div className={classes.gastos}>Gastos</div>
      <div className={classes.ahorros}>Ahorros</div>
      <div className={classes.verTodo}>Ver todo</div>
      <div className={classes.verTodo2}>Ver todo</div>
      <div className={classes.chevronDown}>
        <ChevronDownIcon className={classes.icon15} />
      </div>
      <div className={classes.chevronDown2}>
        <ChevronDownIcon2 className={classes.icon16} />
      </div>
      <div className={classes.rectangle1863}></div>
      <div className={classes.rectangle1885}></div>
      <div className={classes.buscar}>Buscar</div>
      <div className={classes.rectangle170}></div>
      <div className={classes.rectangle169}></div>
      <div className={classes.rectangle172}></div>
      <div className={classes.rectangle171}></div>
      <Home
        className={classes.home}
        swap={{
          union: <UnionIcon className={classes.icon6} />,
        }}
      />
      <User_2
        className={classes.user_2}
        swap={{
          union: <UnionIcon2 className={classes.icon7} />,
        }}
      />
      <Wallet
        className={classes.wallet}
        swap={{
          union: <UnionIcon3 className={classes.icon8} />,
        }}
      />
      <Chart
        className={classes.chart3}
        swap={{
          cart: <CartIcon3 className={classes.icon9} />,
        }}
      />
      <StatusBar_ThemeLight
        className={classes.statusBar}
        classes={{ notch: classes.notch, rightSide: classes.rightSide }}
        swap={{
          rightSide: (
            <div className={classes.rightSide}>
              <RightSideIcon className={classes.icon10} />
            </div>
          ),
        }}
        hide={{
          rectangle1: true,
          leftTitleRight: true,
        }}
      />
      <div className={classes.financiogo_logoRemovebgPreview}></div>
      <div className={classes.vector}>
        <VectorIcon3 className={classes.icon17} />
      </div>
      <div className={classes.leftTitleRight}>
        <div className={classes.LeftAccessory}></div>
        <div className={classes.RightAccessory}></div>
      </div>
    </div>
  );
});
