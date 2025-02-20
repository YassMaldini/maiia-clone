import MainReducerState from './mainReducer.types';

const MAIN_REDUCER_INITIAL_STATE = Object.freeze<MainReducerState>({
  isDarkMode: true,
  currentLocation: undefined
});

export default MAIN_REDUCER_INITIAL_STATE;
