import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../../../utils/theme/theme';
import SettingsItem from '../SettingsItem';
import { SettingsSwitchItemProps } from './SettingsSwitchItem.types';
import Switch from '../../../../designSystem/Switch/Switch';

const SettingsSwitchItem = ({ label, toggleSwitch, isEnabled }: SettingsSwitchItemProps) => {
  const { colors } = useTheme<Theme>();

  return (
    <SettingsItem
      {...{ label }}
      rightElement={
        <Switch
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      }
    />
  );
};

export default SettingsSwitchItem;
