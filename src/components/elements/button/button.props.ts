import { ReactNode } from 'react';
import { Colors, OverridableStringUnion, Rounded, Sizes } from '@/utils/types';
import { Types } from '../text/text.props';

export interface ButtonProps {
  children?: ReactNode

  color?: OverridableStringUnion<Colors, ButtonPropsColorOverrides>;

  size?: Sizes

  variant?: Variant

  shape?: OverridableStringUnion<Shape, ButtonPropsShapeOverrides>

  rounded?: Rounded

  className?: string

  onClick?: (event?: any) => void

  onTouchStart?: (event?: any) => void

  onTouchEnd?: (event?: any) => void

  onMouseDown?: (event?: any) => void

  onMouseUp?: (event?: any) => void

  type?: 'button' | 'submit' | 'reset'

  disabled?: boolean

  loading?: boolean

  style?: any

  startAdornment?: ReactNode

  startAdornmentClassName?: string

  endAdornment?: ReactNode

  endAdornmentClassName?: string

  fontType?: Types

  href?: any

  dataTestId?: string
}

export interface ButtonPropsColorOverrides {
}

export interface ButtonPropsShapeOverrides {
}

export type Variant = 'text' | 'outlined' | 'filled';
export type Shape = 'square' | 'rectangle'
export type FontColor = 'white' | 'black'
