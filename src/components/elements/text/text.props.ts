import { CSSProperties } from 'react';
import { Colors, OverridableStringUnion } from '@/utils/types';

export interface TextProps {
  itemProp?: string

  children: any

  variant?: Variants

  className?: string

  typography?: Typography

  color?: OverridableStringUnion<TextColors, TextPropsColorOverrides>;

  align?: Align

  type?: Types

  style?: CSSProperties

  completed?: boolean

  dataTestId?: string

  direction?: 'rtl' | 'ltr' | 'auto'

  onClick?: () => void

  id?: string
}

export interface TextPropsColorOverrides {

}

export type Variants = 'p' | 'body' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'li'
export type Typography = 'small' | 'base' | 'large' | 'inherit'
export type TextColors = Colors | 'grey.light' | 'grey' | 'grey.dark' | 'white' | 'black'
export type Align = 'right' | 'left' | 'center' | 'justify' | 'start' | 'end' | 'inherit'
export type Types = 'medium' | 'bold' | 'light' | 'regular'
