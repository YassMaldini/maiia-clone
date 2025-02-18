import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import { Navigator, Screen } from './HomeStack.navigator';
import { HomeStackScreenList } from './HomeStack.types';

const HomeStack = () => {

  return (
    <Navigator
      initialRouteName={HomeStackScreenList.HomeScreen}
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true
      }}>
      <Screen name={HomeStackScreenList.HomeScreen} component={HomeScreen} />
    </Navigator>
  );
};

export default HomeStack;
