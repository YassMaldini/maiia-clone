import PractitionerScreen from '../../screens/PractitionerScreen/PractitionerScreen';
import SearchScreen from '../../screens/SearchScreen/SearchScreen';
import SearchSuggestionsScreen from '../../screens/SearchSuggestionsScreen/SearchSuggestionsScreen';
import { Navigator, Screen } from './SearchStack.navigator';
import { SearchStackScreenList } from './SearchStack.types';

const SearchStack = () => {

  return (
    <Navigator
      initialRouteName={SearchStackScreenList.SearchScreen}
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true
      }}>
      <Screen name={SearchStackScreenList.SearchScreen} component={SearchScreen} />
      <Screen name={SearchStackScreenList.SearchSuggestionsScreen} component={SearchSuggestionsScreen} />
      <Screen name={SearchStackScreenList.PractitionerScreen} component={PractitionerScreen} />
    </Navigator>
  );
};

export default SearchStack;
