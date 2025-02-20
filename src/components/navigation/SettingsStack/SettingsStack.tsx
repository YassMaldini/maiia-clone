import SettingsScreen from '../../screens/SettingsScreen/SettingsScreen';
import { Navigator, Screen } from './SettingsStack.navigator';
import { SettingsStackScreenList } from './SettingsStack.types';

const SettingsStack = () => {

  return (
    <Navigator
      initialRouteName={SettingsStackScreenList.SettingsScreen}
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true
      }}>
      <Screen name={SettingsStackScreenList.SettingsScreen} component={SettingsScreen} />
    </Navigator>
  );
};

export default SettingsStack;
