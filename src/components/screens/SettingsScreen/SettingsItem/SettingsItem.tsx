import Box from '../../../designSystem/Box/Box';
import Pressable from '../../../designSystem/Pressable/Pressable';
import Text from '../../../designSystem/Text/Text';
import { SettingsItemProps } from './SettingsItem.types';

const SettingsItem = ({ label, rightElement, ...props }: SettingsItemProps) => {
  return (
    <Pressable {...props}>
      <Box
        height={50}
        paddingHorizontal="sToM"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Text fontSize={17}>{label}</Text>
        <Box>{rightElement}</Box>
      </Box>
    </Pressable>
  );
};

export default SettingsItem;
