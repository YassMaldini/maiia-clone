import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigation from './src/components/navigation/Navigation';
import { persistor, store } from './src/store/configureStore';
import moment from 'moment';
import 'moment/min/locales'
moment.locale('fr')

export default () => {

  const queryClient = new QueryClient();

  return (
    <StoreProvider {...{ store }}>
      <PersistGate {...{ persistor }}>
        <QueryClientProvider client={queryClient}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Navigation />
          </GestureHandlerRootView>
        </QueryClientProvider>
      </PersistGate>
    </StoreProvider>
  );
}
