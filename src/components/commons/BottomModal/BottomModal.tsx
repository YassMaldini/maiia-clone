import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { useTheme } from '@shopify/restyle';
import { forwardRef, useMemo } from 'react';
import { BottomModalProps } from './BottomModal.types';
import { Theme } from '../../../utils/theme/theme';
import Box from '../../designSystem/Box/Box';
import { StyleSheet } from 'react-native';

const BottomModal = forwardRef<BottomSheetModal, BottomModalProps>(
  ({ children, snapPoints, ...rest }, ref) => {
    const theme = useTheme<Theme>();

    const initialSnapPoints = useMemo(() => ['25%', '50%'], []);

    return (
      <BottomSheetModal
        {...{ ref }}
        index={0}
        snapPoints={snapPoints || initialSnapPoints}
        // handleHeight={animatedHandleHeight}
        // contentHeight={animatedContentHeight}
        enablePanDownToClose
        enableDismissOnClose
        enableDynamicSizing
        backgroundStyle={{
          backgroundColor: theme.colors.background,
        }}
        handleStyle={{
          backgroundColor: theme.colors.background,
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
        }}
        handleIndicatorStyle={{
          backgroundColor: theme.colors.textPrimary
        }}
        backdropComponent={(backdropProps) => (
          <BottomSheetBackdrop
            {...backdropProps}
            opacity={0.5}
            enableTouchThrough={false}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            style={[{ backgroundColor: 'rgba(0, 0, 0, 1)' }, StyleSheet.absoluteFillObject]}
          />
        )}
        {...rest}>
        <BottomSheetView testID="bottomSheet" style={{ flex: 1 }}>
          <Box flex={1} backgroundColor="background">
            {children}
          </Box>
        </BottomSheetView>
      </BottomSheetModal>
    );
  }
);

export default BottomModal;
