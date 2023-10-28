import React from 'react';
import { TextProps } from './text.props';
import classNames from '@/utils/class-names';
import { ALIGN, COLOR, TYPE, TYPOGRAPHY } from './text.style';

const Text = (
  {
    children,
    variant = 'p',
    className,
    typography = 'base',
    color = 'grey.dark',
    align = 'center',
    type = 'regular',
    style,
    completed = false,
    dataTestId,
    direction = 'auto',
    ...rest
  }: TextProps) => {
  const Component = variant;

  return (
    <Component
      data-testid={dataTestId}
      dir={direction}
      style={style}
      className={classNames(
        'z-[4]',
        TYPOGRAPHY[typography],
        completed ? 'line-through text-grey-light' : COLOR[color],
        ALIGN[align],
        TYPE[type],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Text;
