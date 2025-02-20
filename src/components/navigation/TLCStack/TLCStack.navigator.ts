import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TLCStackParamsList } from './TLCStack.types';

export const { Navigator, Screen } = createNativeStackNavigator<TLCStackParamsList>();
