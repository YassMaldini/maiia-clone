import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setDarkMode } from '../../../store/main/mainActions/mainActions';
import { darkModeSelector } from '../../../store/main/mainReducerSelectors';
import Box from '../../designSystem/Box/Box';
import SettingsSwitchItem from './SettingsItem/SettingsSwitchItem/SettingsSwitchItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../utils/theme/theme';

const SettingsScreen = () => {

  const { colors } = useTheme<Theme>()

  const dispatch = useDispatch();

  const isDarkMode = useSelector(darkModeSelector);
  const darkModeSwitch = useCallback(
    () => setDarkMode(!isDarkMode)(dispatch),
    [isDarkMode, dispatch]
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <Box flex={1} paddingVertical="sToM">
        <SettingsSwitchItem
          label="Mode sombre"
          toggleSwitch={darkModeSwitch}
          isEnabled={isDarkMode}
        />
      </Box>
    </SafeAreaView>
  );
};

export default SettingsScreen;
