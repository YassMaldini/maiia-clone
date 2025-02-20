import RootState from '../store.types';

export const darkModeSelector = ({ main: reducer }: RootState) => reducer.isDarkMode;

export const currentLocationSelector = ({ main: reducer }: RootState) => reducer.currentLocation;
