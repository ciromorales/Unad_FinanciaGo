import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _24ArrowsArrowTop } from './_24ArrowsArrowTop/_24ArrowsArrowTop';
import { _24ArrowsArrowTopIcon } from './_24ArrowsArrowTopIcon';
import { _24ArrowsArrowTopIcon2 } from './_24ArrowsArrowTopIcon2';
import { _24ArrowsArrowTopIcon3 } from './_24ArrowsArrowTopIcon3';
import { Arrow_to_top } from './Arrow_to_top/Arrow_to_top';
import { ArrowToTopIcon } from './ArrowToTopIcon';
import { BubbleTeaIcon } from './BubbleTeaIcon';
import { BubbleTeaIcon2 } from './BubbleTeaIcon2';
import { Calendar } from './Calendar/Calendar';
import { ChevronDownIcon } from './ChevronDownIcon';
import classes from './HistoricoDeGastos.module.css';
import { Rectangle25Icon } from './Rectangle25Icon';
import { Rectangle25Icon2 } from './Rectangle25Icon2';
import { Rectangle26Icon } from './Rectangle26Icon';
import { Rectangle26Icon2 } from './Rectangle26Icon2';
import { Shopping_bag } from './Shopping_bag/Shopping_bag';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  hide?: {
    icon?: boolean;
  };
}
/* @figmaId 29:2777 */
export const HistoricoDeGastos: FC<Props> = memo(function HistoricoDeGastos(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.ayer}>Ayer</div>
      <div className={classes.rectangle186}></div>
      <div className={classes.rectangle187}></div>
      <div className={classes.rectangle188}></div>
      <div className={classes.rectangle189}></div>
      <div className={classes.rectangle190}></div>
      <div className={classes.rectangle191}></div>
      <div className={classes.rectangle192}></div>
      <div className={classes.rectangle193}></div>
      <div className={classes.rectangle194}></div>
      <div className={classes.rectangle195}></div>
      <div className={classes.rectangle196}></div>
      <div className={classes.compras}>Compras</div>
      <div className={classes.domicilioComida}>Domicilio Comida</div>
      <div className={classes.ayisha}>Ayisha</div>
      <div className={classes._434PM}>4:34 PM</div>
      <div className={classes._657PM}>6:57 PM</div>
      <div className={classes._1223AM}>12:23 AM</div>
      <div className={classes._24600}>$24.600</div>
      <div className={classes._6000}>$6000</div>
      <div className={classes._584}>$5.84</div>
      <_24ArrowsArrowTop
        className={classes._24ArrowsArrowTop}
        hide={{
          icon: true,
        }}
      />
      <_24ArrowsArrowTop
        className={classes._24ArrowsArrowTop2}
        swap={{
          icon: <_24ArrowsArrowTopIcon className={classes.icon} />,
        }}
      />
      <Shopping_bag
        className={classes.shopping_bag}
        swap={{
          rectangle25: <Rectangle25Icon className={classes.icon2} />,
          rectangle26: <Rectangle26Icon className={classes.icon3} />,
        }}
      />
      <div className={classes.bubbleTea}>
        <BubbleTeaIcon className={classes.icon10} />
      </div>
      <div className={classes.chevronDown}>
        <ChevronDownIcon className={classes.icon11} />
      </div>
      <div className={classes.historial}>Historial</div>
      <div className={classes.rectangle2}></div>
      <div className={classes.rectangle3}></div>
      <Arrow_to_top
        className={classes.arrow_to_top}
        swap={{
          arrowToTop: <ArrowToTopIcon className={classes.icon4} />,
        }}
      />
      <div className={classes.fecha}>Fecha</div>
      <div className={classes.hoy}>Hoy</div>
      <div className={classes.rectangle167}></div>
      <div className={classes.rectangle178}></div>
      <div className={classes.rectangle182}></div>
      <div className={classes.rectangle165}></div>
      <div className={classes.rectangle179}></div>
      <div className={classes.rectangle183}></div>
      <div className={classes.rectangle168}></div>
      <div className={classes.rectangle180}></div>
      <div className={classes.rectangle166}></div>
      <div className={classes.rectangle181}></div>
      <div className={classes.compras2}>Compras</div>
      <div className={classes.domicilioComida2}>Domicilio Comida</div>
      <div className={classes.sarah}>Sarah</div>
      <div className={classes._434PM2}>4:34 PM</div>
      <div className={classes._657PM2}>6:57 PM</div>
      <div className={classes._1223AM2}>12:23 AM</div>
      <div className={classes._40800}>$40.800</div>
      <div className={classes._21300}>$21.300</div>
      <div className={classes._15500}>$15.500</div>
      <Shopping_bag
        className={classes.shopping_bag2}
        swap={{
          rectangle25: <Rectangle25Icon2 className={classes.icon5} />,
          rectangle26: <Rectangle26Icon2 className={classes.icon6} />,
        }}
      />
      <div className={classes.bubbleTea2}>
        <BubbleTeaIcon2 className={classes.icon12} />
      </div>
      <div className={classes.nov}>Nov</div>
      <Calendar
        className={classes.calendar}
        classes={{ rectangle101: classes.rectangle101 }}
        swap={{
          vector: <VectorIcon className={classes.icon7} />,
        }}
      />
      <div className={classes.rectangle197}></div>
      <div className={classes.gastos}>Gastos</div>
      <div className={classes.tickets}>Tickets</div>
      <div className={classes._1576150}>$1.576.150</div>
      <div className={classes._60}>$60</div>
      <_24ArrowsArrowTop
        className={classes._24ArrowsArrowTop3}
        swap={{
          icon: <_24ArrowsArrowTopIcon2 className={classes.icon8} />,
        }}
      />
      <_24ArrowsArrowTop
        className={classes._24ArrowsArrowTop4}
        swap={{
          icon: <_24ArrowsArrowTopIcon3 className={classes.icon9} />,
        }}
      />
      <div className={classes._5}></div>
    </div>
  );
});
