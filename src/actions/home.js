import { actionCreator } from '../utils/actionCreator';

export const ICON_HOVER = 'ICON_HOVER';

//export const iconHover = actionCreator(ICON_HOVER, icon);
export const iconHover = (icon) => {
  return {
    type: ICON_HOVER,
    icon
  }
}

