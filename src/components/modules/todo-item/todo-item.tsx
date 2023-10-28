import React from 'react';
import { Button, Checkbox, Div, Divider, Text } from '@/components/elements';
import { TodoItemProps } from './todo-item.props';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { TodoActions } from '@/store/todo/todo-action';

const TodoItem = ({ id, title, description, isCompleted }: TodoItemProps) => {
  const dispatch = useDispatch();
  const handleIsCompleted = () => {
    dispatch(TodoActions.handleIsCompleted({ id: id }));
  };

  const handleRemove = () => {
    dispatch(TodoActions.handleRemove({ id: id }));
  };

  return (
    <>
      <Div className={'flex-col group p-3 md:px-6 md:py-4 gap-4'}>
        <Div className={'h-10 gap-3 md:gap-4 items-center'}>
          <label className={'flex grow flex-row items-center overflow-hidden gap-3 md:gap-4'}>
            <Checkbox checked={isCompleted} onChange={handleIsCompleted}/>
            <Text className={'whitespace-nowrap text-ellipsis overflow-hidden'} align={'left'} completed={isCompleted}>{title}</Text>
          </label>
          <Button
            onClick={handleRemove}
            size={'small'}
            className={'!p-0 md:opacity-0 md:group-hover:opacity-100'}
            variant={'text'}
            startAdornment={<Image alt={'delete'} width={16} height={16} src={'/close.png'}/>}
          />
        </Div>
        <Text typography={'small'} className={isCompleted ? 'line-through' : ''} align={'left'} completed={isCompleted}>{description}</Text>
      </Div>
      <Divider/>
    </>
  );
};

export default TodoItem;
