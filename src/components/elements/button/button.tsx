import React from 'react';
import { ButtonProps } from './button.props';
import classNames from '@/utils/class-names';
import { COLOR_VARIANTS, DISABLED_VARIANTS, ICON_SIZES, ROUNDED, SHAPES, SIZES } from './button.style';
import LoadingIndicator from '../loading-indicator';
import { TYPE } from '../text/text.style';
import Div from '../div';

export const Button = (props: ButtonProps) => {
  const {
    children,
    color = 'primary',
    size = 'medium',
    variant = 'filled',
    shape = 'rectangle',
    rounded = 'medium',
    className,
    onClick,
    type,
    disabled = false,
    loading = false,
    style,
    startAdornment,
    startAdornmentClassName,
    endAdornment,
    endAdornmentClassName,
    fontType = 'bold',
    href,
    dataTestId,
    ...rest
  } = props;

  const clickOnButton = () => {
    if (!disabled && onClick && typeof onClick !== 'undefined') {
      onClick();
    }
  };

  const buttonProps = {
    href: href,
    dir: 'ltr',
    'data-testid': dataTestId,
    onClick: clickOnButton,
    type: type,
    style: style,
    className: classNames(
      'flex flex-row-reverse items-center justify-center hover:transition hover:duration-150 hover:ease-in-out z-[4]',
      TYPE[fontType],
      ROUNDED[rounded],
      SIZES[size],
      disabled ? `${DISABLED_VARIANTS[variant]} cursor-not-allowed !text-white` : COLOR_VARIANTS({ color: color, variant: variant }),
      SHAPES({ shape: shape, size: size }),
      className,
    ),
    ...rest,
  };

  const Children = loading ? (
    <LoadingIndicator color={'inherit'}/>
  ) : (
    <>
      {startAdornment ? (
        <Div className={`items-center justify-center relative object-cover ${ICON_SIZES[size]} ${startAdornmentClassName}`}>
          {startAdornment}
        </Div>
      ) : null}
      {children}
      {endAdornment ? (
        <Div className={`items-center justify-center relative object-cover ${ICON_SIZES[size]} ${endAdornmentClassName}`}>
          {endAdornment}
        </Div>
      ) : null}
    </>
  );

  if (href && !disabled) {
    try {
      const NextLink = require('next/link');
      return (
        <NextLink {...buttonProps}>
          {Children}
        </NextLink>
      );
    } catch (e: any) {
      if (e.code !== 'MODULE_NOT_FOUND') {
        return (
          <a {...buttonProps}>
            {Children}
          </a>
        );
      }
    }
  }

  return (
    <button {...buttonProps}>
      {Children}
    </button>
  );
};

export default Button;
