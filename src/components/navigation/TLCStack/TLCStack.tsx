import PractitionerScreen from '../../screens/PractitionerScreen/PractitionerScreen';
import TLCScreen from '../../screens/TLCScreen/TLCScreen';
import { Navigator, Screen } from './TLCStack.navigator';
import { TLCStackScreenList } from './TLCStack.types';

const TLCStack = () => {

  return (
    <Navigator
      initialRouteName={TLCStackScreenList.TLCScreen}
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true
      }}>
      <Screen name={TLCStackScreenList.TLCScreen} component={TLCScreen} />
      <Screen name={TLCStackScreenList.PractitionerScreen} component={PractitionerScreen} />
    </Navigator>
  );
};

export default TLCStack;
