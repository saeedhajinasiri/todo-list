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
    error = false,
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
    disabled ? 'border-grey-100 text-grey-100 bg-grey-100 cursor-not-allowed placeholder-shown:border-t-grey-100 placeholder-shown:hover:border-t-grey-100' : error ? 'bg-danger-100 border-danger placeholder-shown:border-t-danger placeholder-shown:hover:border-danger' : `${INPUT_COLORS[color]}`,
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
        'relative block font-normal',
        !disabled && error ? 'text-danger' : 'text-grey-400',
        className
      )}>
      {Component}
      {label ? (
        <span className={classNames(
          `flex items-center z-[1] absolute top-0 start-0 cursor-text`,
          LABEL_SIZES[size],
          error ? 'peer-focus:text-danger before:peer-focus:border-danger after:peer-focus:border-danger peer-focus:peer-placeholder-shown:after:border-danger peer-focus:peer-placeholder-shown:before:border-danger' : LABEL_COLOR[color],
          `transition-all origin-[0]`,
          disabled ? '!cursor-not-allowed' : '',
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
          error ? '' : LABEL_COLOR[color],
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
          <Text className={'flex flex-row gap-x-2 items-center'} typography={'small'} color={disabled ? 'grey.light' : (error ? 'danger' : 'grey')}>
            {error ? <NoticeIcon/> : null} {helperText}
          </Text>
          <Text direction={'ltr'} typography={'small'} color={disabled ? 'grey.light' : (error ? 'danger' : 'grey')}>
            {maxLength && hasCounter ? `${count} / ${maxLength}` : null}
          </Text>
        </div>
      ) : null}
    </label>
  );
});

export default TextField;

const NoticeIcon = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.99992 2.33325C11.4053 2.33325 14.1666 5.09392 14.1666 8.49992C14.1666 11.9053 11.4053 14.6666 7.99992 14.6666C4.59392 14.6666 1.83325 11.9053 1.83325 8.49992C1.83325 5.09392 4.59392 2.33325 7.99992 2.33325Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.99865 5.96936V8.91536" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.99847 11.0306H8.00518" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
