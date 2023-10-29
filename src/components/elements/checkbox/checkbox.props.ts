import { ChangeEvent } from 'react';
import { Colors } from '@/utils/types';

export interface CheckboxProps {
  color?: Colors;

  className?: string

  onChange?: (e: ChangeEvent<HTMLInputElement>) => void

  checked?: boolean

  disabled?: boolean

  size?: 'small' | 'medium' | 'large' | 'tiny'
}

