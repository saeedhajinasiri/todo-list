import React from 'react';
import { Div, Text } from '@/components/elements';
import TodoItem from '@/components/modules/todo-item/todo-item';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/root-reducer';

const TodoList = () => {
  const { filteredList } = useSelector((state: RootState) => state.todo);

  if (filteredList && filteredList.length > 0) {
    return (
      <>
        {filteredList.map((item: any) => (
          <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            isCompleted={item.isCompleted}
          />
        ))}
      </>
    );
  }

  return (
    <Div className={'min-h-[64px] items-center p-3 md:px-6 md:py-4'}>
      <Text typography={'small'}>You don`t Have any todo lists. Excellent!</Text>
    </Div>
  );
};

export default TodoList;
