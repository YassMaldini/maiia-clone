import { useEffect, useMemo, useRef } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { RootContext } from './RootStack.context';
import { Navigator, Screen } from './RootStack.navigator';
import HomeStack from '../HomeStack/HomeStack';
import SearchStack from '../SearchStack/SearchStack';
import Box from '../../designSystem/Box/Box';
import { SvgIcon } from '../../designSystem/SvgIcon/SvgIcon';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../utils/theme/theme';

import HouseRegularIcon from "../../../../assets/svg/house-regular.svg"
import HouseSolidIcon from "../../../../assets/svg/house-solid.svg"
import SearchRegularIcon from "../../../../assets/svg/magnifying-glass-regular.svg"
import SearchSolidIcon from "../../../../assets/svg/magnifying-glass-solid.svg"
import { RootStackList } from './RootStack.types';
import NotConnectedBottomModal from './NotConnectedBottomModal/NotConnectedBottomModal';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

SplashScreen.preventAutoHideAsync();

export default () => {

  const theme = useTheme<Theme>()

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  function openNotConnectedModal() {
    bottomSheetModalRef.current?.present()
  }

  const contextValue = useMemo(
    () => ({
      openNotConnectedModal
    }),
    [
      openNotConnectedModal
    ]
  )

  const iconSize = 24;
  const iconColor = (focused: boolean) => (focused ? 'primary' : 'textPrimary');

  return (
    <RootContext.Provider value={contextValue}>
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            borderTopWidth: 1,
            borderTopColor: '#fff',
            backgroundColor: theme.colors.background,
            paddingHorizontal: theme.spacing.mToL,
            paddingVertical: theme.spacing.s
          },
        }}
      >
        <Screen
          name={RootStackList.HomeStack}
          component={HomeStack}
          options={{
            tabBarLabel: 'Accueil',
            tabBarShowLabel: true,
            tabBarIcon: ({ focused }) => (
              <Box
                paddingVertical="xs"
                paddingHorizontal="sToM"
                borderRadius="m"
              >
                <SvgIcon
                  width={iconSize}
                  height={iconSize}
                  icon={focused ? HouseSolidIcon : HouseRegularIcon}
                  color={iconColor(focused)}
                />
              </Box>
            )
          }}
        />
        <Screen
          name={RootStackList.SearchStack}
          component={SearchStack}
          options={{
            tabBarLabel: 'Rechercher',
            tabBarShowLabel: true,
            tabBarIcon: ({ focused }) => (
              <Box
                paddingVertical="xs"
                paddingHorizontal="sToM"
                borderRadius="m"
              >
                <SvgIcon
                  width={iconSize}
                  height={iconSize}
                  icon={focused ? SearchSolidIcon : SearchRegularIcon}
                  color={iconColor(focused)}
                />
              </Box>
            )
          }}
        />
      </Navigator>

      <NotConnectedBottomModal ref={bottomSheetModalRef} />
    </RootContext.Provider>
  );
};
