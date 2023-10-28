import React from 'react';
import { Button, Div, Text } from '@/components/elements';
import TodoItem from '@/components/modules/todo-item/todo-item';

const TodoList = () => {
  return (
    <Div className={'flex-col shadow-lg'}>
      <Div className={'flex-col bg-white w-full rounded-t-lg'}>
        <TodoItem isCompleted={true}/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </Div>

      <Div className={'justify-between items-center h-10 md:h-14 flex-wrap bg-white rounded-b-lg'}>
        <Text align={'left'} color={'gray'} className={'w-28 order-1 ml-3 md:ml-6'} typography={'small'}>5 items left</Text>
        <Button size={'small'} className={'w-28 !px-0 order-3 mr-3 md:mr-6'} color={'gray'} variant={'text'}>Clear Completed</Button>
        <Div className={'gap-5 grow justify-center order-4 md:order-2 h-12 mt-4 md:mt-0 bg-white rounded-lg items-center'}>
          <Button size={'small'} className={'!p-0'} color={'primary'} variant={'text'}>All</Button>
          <Button size={'small'} className={'!p-0'} color={'gray'} variant={'text'}>Active</Button>
          <Button size={'small'} className={'!p-0'} color={'gray'} variant={'text'}>Completed</Button>
        </Div>
      </Div>
    </Div>
  );
};

export default TodoList;
