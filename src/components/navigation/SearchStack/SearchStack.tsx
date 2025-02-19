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
    </Navigator>
  );
};

export default SearchStack;
