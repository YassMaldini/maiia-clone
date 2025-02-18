import { ActivityIndicator } from 'react-native';
import Box from '../../designSystem/Box/Box';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../utils/theme/theme';

export const Loading = () => {
  const { colors } = useTheme<Theme>()

  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <ActivityIndicator size="large" color={colors.primary} animating={true} />
    </Box>
  )
};
