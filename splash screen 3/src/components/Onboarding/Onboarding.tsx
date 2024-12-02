import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_TypePrimaryStyleRoundSi } from './Button_TypePrimaryStyleRoundSi/Button_TypePrimaryStyleRoundSi';
import { ClipPathGroupIcon } from './ClipPathGroupIcon';
import { HomeIndicator_DarkModeFalse } from './HomeIndicator_DarkModeFalse/HomeIndicator_DarkModeFalse';
import classes from './Onboarding.module.css';
import { SendMoneyAbroad } from './SendMoneyAbroad/SendMoneyAbroad';
import { SliderIndicator_PageStatus2 } from './SliderIndicator_PageStatus2/SliderIndicator_PageStatus2';
import { StatusBar_ThemeLight } from './StatusBar_ThemeLight/StatusBar_ThemeLight';

interface Props {
  className?: string;
  hide?: {
    rectangle1?: boolean;
    angleLeft?: boolean;
    LeftTitle?: boolean;
    Title?: boolean;
    RightTitle?: boolean;
    angleLeft2?: boolean;
    angleRight?: boolean;
  };
}
/* @figmaId 1:1449 */
export const Onboarding: FC<Props> = memo(function Onboarding(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <HomeIndicator_DarkModeFalse className={classes.homeIndicator} />
      <StatusBar_ThemeLight
        classes={{ notch: classes.notch }}
        hide={{
          rectangle1: true,
          angleLeft: true,
          LeftTitle: true,
          Title: true,
          RightTitle: true,
        }}
      />
      <div className={classes.container}>
        <div className={classes.content}>
          <SendMoneyAbroad
            swap={{
              clipPathGroup: <ClipPathGroupIcon className={classes.icon} />,
            }}
          />
          <div className={classes.row}>
            <SliderIndicator_PageStatus2
              classes={{
                rectangle1081: classes.rectangle1081,
                rectangle1083: classes.rectangle1083,
                rectangle1082: classes.rectangle1082,
              }}
            />
            <div className={classes.content2}>
              <div className={classes.realizaSeguimientoSobreTusGast}>Realiza seguimiento sobre tus gastos</div>
            </div>
          </div>
        </div>
        <Button_TypePrimaryStyleRoundSi
          className={classes.button}
          hide={{
            angleLeft: true,
            angleRight: true,
          }}
          text={{
            label: <div className={classes.label}>Siguiente</div>,
          }}
        />
      </div>
      <div className={classes.financiogo_logoRemovebgPreview}></div>
    </div>
  );
});
