import React from 'react';
import { Button, Checkbox, Div, Divider, Text } from '@/components/elements';
import { TodoItemProps } from './todo-item.props';
import Image from 'next/image';

const TodoItem = ({ isCompleted }: TodoItemProps) => {
  return (
    <>
      <Div className={'flex-col group p-3 md:px-6 md:py-4 gap-4'}>
        <Div className={'h-10 gap-3 md:gap-4 items-center'}>
          <label className={'flex grow flex-row items-center overflow-hidden gap-3 md:gap-4'}>
            <Checkbox/>
            <Text className={'whitespace-nowrap text-ellipsis overflow-hidden'} align={'left'} completed={isCompleted}>Complete online JavaScript</Text>
          </label>
          <Button
            size={'small'}
            className={'!p-0 md:opacity-0 md:group-hover:opacity-100'}
            variant={'text'}
            startAdornment={<Image alt={'delete'} width={16} height={16} src={'/close.png'} />}
          />
        </Div>
        <Text typography={'small'} className={isCompleted ? 'line-through' : ''} align={'left'} completed={isCompleted}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem por incididunt ut labore et dolore magna aliqua.</Text>
      </Div>
      <Divider/>
    </>
  );
};

export default TodoItem;
