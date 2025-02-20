import {
  ResetMainAction,
  RESET_MAIN_REDUCER,
  SetIsDarkModeAction,
  SET_IS_DARK_MODE,
  SetCurrentLocationAction,
  SET_CURRENT_LOCATION,
} from './mainActions.types';
import { Dispatch } from 'redux';

export const setDarkMode = (isDarkMode: boolean) => async (dispatch: Dispatch) => {
  dispatch<SetIsDarkModeAction>({
    type: SET_IS_DARK_MODE,
    isDarkMode,
  });
};

export const setCurrentLocation =
  (currentLocation: string) => async (dispatch: Dispatch) => {
    dispatch<SetCurrentLocationAction>({
      type: SET_CURRENT_LOCATION,
      currentLocation,
    });
  };

export const resetMain = () => async (dispatch: Dispatch) => {
  dispatch<ResetMainAction>({
    type: RESET_MAIN_REDUCER,
  });
};
