import { Shape, Variant } from './button.props';
import { Colors, Sizes } from '@/utils/types';

export const SIZES = {
  large: 'h-12 min-h-12 md:h-14 md:min-h-14 text-m-base sm:text-d-base md:text-t-lg px-6 gap-x-3',
  medium: 'h-10 min-h-10 md:h-12 md:min-h-12 text-m-sm sm:text-d-sm md:text-d-base px-5 gap-x-2.5',
  small: 'h-8 min-h-8 md:h-10 md:min-h-10 text-m-xs sm:text-t-xs md:text-d-xs px-4 gap-x-2',
};

export const SQUARE_SHAPE_SIZES = {
  large: 'min-w-12 max-w-12 w-12 md:min-w-14 md:max-w-14 md:w-14 px-3',
  medium: 'min-w-10 max-w-10 w-10 md:min-w-12 md:max-w-12 md:w-12 px-2.5',
  small: 'min-w-8 max-w-8 w-8 md:min-w-10 md:max-w-10 md:w-10 px-2',
};

export const ROUNDED = {
  full: 'rounded-full',
  huge: 'rounded-3xl',
  large: 'rounded-2xl',
  medium: 'rounded-lg',
  small: 'rounded',
  tiny: 'rounded-sm',
  none: 'rounded-none',
};

export const DISABLED_VARIANTS = {
  text: 'bg-transparent hover:bg-transparent inline',
  outlined: 'border-grey-light border',
  filled: 'bg-grey-light border-none',
};

export const COLORS = {
  primary: 'bg-primary border-primary text-white hover:bg-primary-dark active:bg-primary-light',
  gray: 'bg-gray-500 border-gray-500 text-white hover:bg-gray-700 active:bg-gray-300',
  inherit: 'bg-transparent hover:bg-transparent',
};

export const OUTLINED_COLORS = {
  primary: 'border border-primary text-primary hover:bg-primary-100 hover:border-primary-dark hover:text-primary-dark active:border-primary-light active:text-primary-light',
  gray: 'border border-gray-500 text-gray-500 hover:bg-gray-100 hover:border-gray-700 hover:text-gray-700 active:border-gray-300 active:text-gray-300',
  inherit: 'bg-transparent hover:bg-transparent',
};

export const TEXT_COLORS = {
  primary: 'text-primary hover:text-primary-dark active:text-primary-light',
  gray: 'text-gray-500 hover:text-gray-700 active:text-gray-300',
  inherit: 'text-inherit',
};

export const ICON_SIZES = {
  large: 'h-6 min-h-6 max-h-6 w-6 min-w-6 max-w-6',
  medium: 'h-5 min-h-5 max-h-5 w-5 min-w-5 max-w-5',
  small: 'h-4 min-h-4 max-h-4 w-4 min-w-4 max-w-4',
};

/**
 *
 * @param size
 * @param variant
 * @constructor
 */
export const COLOR_VARIANTS = ({ color, variant }: { color: Colors, variant: Variant }) => {
  if (variant === 'filled') {
    return COLORS[color];
  } else if (variant === 'outlined') {
    return OUTLINED_COLORS[color];
  }
  return TEXT_COLORS[color];
};

/**
 *
 * @param size
 * @param shape
 * @constructor
 */
export const SHAPES = ({ size, shape }: { size: Sizes, shape: Shape }) => {
  let className = '';

  if (shape === 'square') {
    className = `${SQUARE_SHAPE_SIZES[size]} ${className} whitespace-nowrap overflow-hidden text-ellipsis`;
  }
  return className;
};
