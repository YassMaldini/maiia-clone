import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ConnectedBottomTabParamsList } from '../../../navigation/BottomTabStack/BottomTabStack.types';

export type SettingsScreenProps = NativeStackScreenProps<
  ConnectedBottomTabParamsList,
  'SettingsScreen'
>;
