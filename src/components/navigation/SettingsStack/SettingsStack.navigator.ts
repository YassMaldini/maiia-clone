import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsStackParamsList } from './SettingsStack.types';

export const { Navigator, Screen } = createNativeStackNavigator<SettingsStackParamsList>();
