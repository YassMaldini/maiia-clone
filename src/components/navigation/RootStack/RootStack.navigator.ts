import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamsList } from './RootStack.types';

export const { Navigator, Screen } = createBottomTabNavigator<RootStackParamsList>();
