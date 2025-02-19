import { Theme } from '../../../utils/theme/theme';
import {
  ChipColors,
  ChipProps
} from './Chip.types';

type ChipColor = {
  text: keyof Theme['colors'],
  background: keyof Theme['colors']
}

export const getChipColor = ({
  color
}: Pick<ChipProps, 'color'>): ChipColor => {
  switch (color) {
    case ChipColors.Primary:
      return {
        text: 'primary',
        background: 'primaryLight'
      }
    case ChipColors.Secondary:
      return {
        text: 'secondary',
        background: 'secondaryLight'
      }
    case ChipColors.Neutral:
      return {
        text: 'textPrimary',
        background: 'secondaryLight'
      }
    case ChipColors.Green:
      return {
        text: 'green',
        background: 'lightGreen'
      }
    default:
      return {
        text: 'primary',
        background: 'primaryLight'
      }
  }
};