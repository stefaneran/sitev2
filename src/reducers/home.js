import { ICON_HOVER } from '../actions/home';
import { constants } from '../containers/Home/constants';

const initialState = {
  secondaryTitle: ["empty", "empty", "empty"]
};

function homeReducer(state = initialState, action) {
  console.log("Called Home Reducer");
  switch (action.type) {
    case ICON_HOVER:
      return {
        secondaryTitle: constants.titles.secondary[action.icon]
      };
    default:
      return state;
  }
}

export default homeReducer;