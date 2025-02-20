import { ReactNode } from 'react';
import { PressableProps } from '../../../designSystem/Pressable/Pressable.types';

export interface SettingsItemProps extends PressableProps {
  label: string;
  rightElement?: ReactNode;
}
