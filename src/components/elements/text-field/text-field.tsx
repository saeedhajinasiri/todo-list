import React, { useState } from 'react';
import { TextFieldProps } from './text-field.props';
import Text from '../text/text';
import classNames from '@/utils/class-names';
import { INPUT_COLORS, LABEL_COLOR, LABEL_SIZES, PLACEHOLDER_POSITION, ROUNDED, SIZES, VARIANTS } from './text-field.style';

export const TextField = React.forwardRef<any, TextFieldProps>(function CustomInput(props, ref) {
  const {
    variant = 'outlined',
    className,
    placeholder,
    size = 'medium',
    color = 'primary',
    disabled = false,
    rounded = 'medium',
    multiline = false,
    maxRows,
    placeholderPosition = 'left',
    inputClassName,
    startAdornment,
    startAdornmentClassName,
    endAdornment,
    endAdornmentClassName,
    type = 'text',
    inputMode = 'text',
    maxLength,
    onChange,
    value,
    helperText = undefined,
    onFocus,
    label,
    hasCounter,
    ...rest
  } = props;

  const [count, setCount] = useState(0);

  const onChangeTextInput = (e: any) => {
    setCount(e?.target?.value?.length || 0);
    if (onChange && typeof onChange === 'function') {
      onChange(e);
    }
  };

  const ClassName = classNames(
    `flex w-full duration-75 px-3 text-grey-800 placeholder-shown:!text-m-base`,
    `peer z-[2] block w-full appearance-none text-m-base sm:text-d-xs md:text-d-base outline-none ${placeholderPosition === 'center' ? 'text-center' : ''}`,
    SIZES[size],
    ROUNDED[rounded],
    VARIANTS[variant],
    PLACEHOLDER_POSITION[placeholderPosition],
    INPUT_COLORS[color],
    startAdornment ? 'pr-12' : 'px-2',
    endAdornment ? 'pl-12' : 'px-2',
    multiline ? 'pt-2' : '',
    inputClassName,
  );

  let Component = <input
    ref={ref}
    dir={'auto'}
    disabled={disabled}
    placeholder={label ? ' ' : placeholder}
    type={type}
    inputMode={inputMode}
    maxLength={maxLength}
    onChange={onChangeTextInput}
    value={value}
    onFocus={onFocus}
    id="floating_outlined"
    className={ClassName}
    {...rest}
  />;

  if (multiline) {
    Component = <textarea
      ref={ref}
      rows={maxRows}
      dir={'auto'}
      disabled={disabled}
      placeholder={label ? ' ' : placeholder}
      onChange={onChangeTextInput}
      maxLength={maxLength}
      value={value}
      onFocus={onFocus}
      className={ClassName}
      {...rest}
    />;
  }

  return (
    <label
      className={classNames(
        'relative block font-normal text-grey',
        className
      )}>
      {Component}
      {label ? (
        <span className={classNames(
          `flex items-center z-[1] absolute top-0 start-0 cursor-text`,
          LABEL_SIZES[size],
          LABEL_COLOR[color],
          `transition-all origin-[0]`,
          'peer-placeholder-shown:mx-2 mx-2 peer-focus:mx-2',
          variant === 'filled' ? '!bg-transparent' : `translate-y-[-50%] peer-focus:translate-y-[-50%] peer-placeholder-shown:translate-y-0`,
          `bg-white peer-placeholder-shown:bg-transparent peer-focus:bg-white`,
          `text-m-sm peer-focus:text-m-sm peer-placeholder-shown:text-m-base`,
          `before:px-1 after:px-1`,
          startAdornment ? 'peer-placeholder-shown:mr-8' : '',
          endAdornment ? 'peer-placeholder-shown:ml-8' : '',
          ROUNDED[rounded],
        )}>
          {label}
        </span>
      ) : null}
      {startAdornment ? (
        <div className={classNames(
          `flex w-8 items-center justify-center mx-2 absolute top-0 start-0`,
          LABEL_COLOR[color],
          SIZES[size],
          startAdornmentClassName,
        )}>
          {startAdornment}
        </div>
      ) : null}
      {endAdornment ? (
        <div className={classNames(
          `flex w-8 items-center justify-center mx-2 absolute top-0 end-0`,
          LABEL_COLOR[color],
          SIZES[size],
          endAdornmentClassName,
        )}>
          {endAdornment}
        </div>
      ) : null}
      {helperText || (maxLength && hasCounter) ? (
        <div className={'flex flex-row justify-between px-3'}>
          <Text className={'flex flex-row gap-x-2 items-center'} typography={'small'} color={'grey'}>
            {helperText}
          </Text>
          <Text direction={'ltr'} typography={'small'} color={'grey'}>
            {maxLength && hasCounter ? `${count} / ${maxLength}` : null}
          </Text>
        </div>
      ) : null}
    </label>
  );
});

export default TextField;
