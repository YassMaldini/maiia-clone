import { UnknownAction } from 'redux';

export const SET_IS_DARK_MODE = 'SET_IS_DARK_MODE';
export const SET_CURRENT_LOCATION = 'SET_CURRENT_LOCATION';
export const RESET_MAIN_REDUCER = 'RESET_MAIN_REDUCER';

export interface SetIsDarkModeAction extends UnknownAction {
  type: typeof SET_IS_DARK_MODE;
  isDarkMode: boolean;
}

export interface SetCurrentLocationAction extends UnknownAction {
  type: typeof SET_CURRENT_LOCATION;
  currentLocation: string;
}

export interface ResetMainAction extends UnknownAction {
  type: typeof RESET_MAIN_REDUCER;
}

type MainReducerActionsTypes = UnknownAction & SetIsDarkModeAction | SetCurrentLocationAction | ResetMainAction

export default MainReducerActionsTypes;
