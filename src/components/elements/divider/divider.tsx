import React from 'react';
import { DividerProps } from './divider.props';
import classNames from '@/utils/class-names';
import { TYPE } from './divider.styles';

export const Divider = (props: DividerProps) => {
  const { type = 'solid', className } = props;
  return (
    <div className={classNames(`w-full border-t border-t-primary-100`,
      TYPE[type],
      className
    )}/>
  );
};

export default Divider;
