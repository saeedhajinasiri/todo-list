import { ChangeEvent } from 'react';
import { Colors, OverridableStringUnion } from '@/utils/types';

export interface CheckboxProps {
  color?: OverridableStringUnion<Colors,
    CheckboxPropsColorOverrides>;

  className?: string

  onChange?: (e: ChangeEvent<HTMLInputElement>) => void

  checked?: boolean

  disabled?: boolean

  size?: 'small' | 'medium' | 'large' | 'tiny' | 'huge'
}

export interface CheckboxPropsColorOverrides {

}

