import { useMemo } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { RootContext } from './RootStack.context';
import { Navigator, Screen } from './RootStack.navigator';
import HomeStack from '../HomeStack/HomeStack';
import Box from '../../designSystem/Box/Box';
import { SvgIcon } from '../../designSystem/SvgIcon/SvgIcon';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../utils/theme/theme';

import HouseRegularIcon from "../../../../assets/svg/house-regular.svg"
import HouseSolidIcon from "../../../../assets/svg/house-solid.svg"

SplashScreen.preventAutoHideAsync();

export default () => {

  const theme = useTheme<Theme>()

  const contextValue = useMemo(
    () => ({}),
    []
  )

  const iconSize = 28;
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
        }}>
        <Screen
          name="HomeStack"
          component={HomeStack}
          options={{
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
      </Navigator>
    </RootContext.Provider>
  );
};
