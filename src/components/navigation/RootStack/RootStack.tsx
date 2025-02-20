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
import { RootStackList } from './RootStack.types';
import NotConnectedBottomModal from './NotConnectedBottomModal/NotConnectedBottomModal';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import TLCStack from '../TLCStack/TLCStack';
import SettingsStack from '../SettingsStack/SettingsStack';

import HouseRegularIcon from "../../../../assets/svg/house-regular.svg"
import HouseSolidIcon from "../../../../assets/svg/house-solid.svg"
import SearchRegularIcon from "../../../../assets/svg/magnifying-glass-regular.svg"
import SearchSolidIcon from "../../../../assets/svg/magnifying-glass-solid.svg"
import VideoRegularIcon from "../../../../assets/svg/video-regular.svg"
import VideoSolidIcon from "../../../../assets/svg/video-solid.svg"
import GearRegularIcon from "../../../../assets/svg/gear-regular.svg"
import GearSolidIcon from "../../../../assets/svg/gear-solid.svg"
import Text from '../../designSystem/Text/Text';

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
            paddingVertical: theme.spacing.s
          },
        }}
      >
        <Screen
          name={RootStackList.HomeStack}
          component={HomeStack}
          options={{
            tabBarShowLabel: true,
            tabBarLabel: ({ focused }) => (
              <Text
                color={focused ? 'primary' : 'textPrimary'}
              >
                Accueil
              </Text>
            ),
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
            tabBarShowLabel: true,
            tabBarLabel: ({ focused }) => (
              <Text
                color={focused ? 'primary' : 'textPrimary'}
              >
                Rechercher
              </Text>
            ),
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
        <Screen
          name={RootStackList.TLCStack}
          component={TLCStack}
          options={{
            tabBarShowLabel: true,
            tabBarLabel: ({ focused }) => (
              <Text
                color={focused ? 'primary' : 'textPrimary'}
              >
                TLC
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <Box
                paddingVertical="xs"
                paddingHorizontal="sToM"
                borderRadius="m"
              >
                <SvgIcon
                  width={iconSize}
                  height={iconSize}
                  icon={focused ? VideoSolidIcon : VideoRegularIcon}
                  color={iconColor(focused)}
                />
              </Box>
            )
          }}
        />
        <Screen
          name={RootStackList.SettingsStack}
          component={SettingsStack}
          options={{
            tabBarShowLabel: true,
            tabBarLabel: ({ focused }) => (
              <Text
                color={focused ? 'primary' : 'textPrimary'}
              >
                Paramètres
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <Box
                paddingVertical="xs"
                paddingHorizontal="sToM"
                borderRadius="m"
              >
                <SvgIcon
                  width={iconSize}
                  height={iconSize}
                  icon={focused ? GearSolidIcon : GearRegularIcon}
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
