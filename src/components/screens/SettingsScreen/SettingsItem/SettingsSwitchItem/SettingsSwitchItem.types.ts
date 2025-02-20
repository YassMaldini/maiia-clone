import { Dispatch, SetStateAction } from 'react';

export interface SettingsSwitchItemProps {
  label: string;
  isEnabled?: boolean;
  toggleSwitch: Dispatch<SetStateAction<boolean>>;
}
