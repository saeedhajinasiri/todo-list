import React from 'react';
import { Button, Div, Text } from '@/components/elements';
import { useDispatch, useSelector } from 'react-redux';
import { TodoActions } from '@/store/todo/todo-action';
import { RootState } from '@/store/root-reducer';

const TodoActionsComponent = () => {
  const dispatch = useDispatch();
  const { filterType, filteredList } = useSelector((state: RootState) => state.todo);

  const handleAllFilters = () => {
    dispatch(TodoActions.handleAllFilters());
  };

  const handleActiveFilters = () => {
    dispatch(TodoActions.handleActiveFilters());
  };

  const handleIsCompletedFilters = () => {
    dispatch(TodoActions.handleIsCompletedFilters());
  };

  const handleClearCompleted = () => {
    dispatch(TodoActions.handleClearCompleted());
  };

  return (
    <Div className={'justify-between items-center h-10 md:h-14 flex-wrap bg-white rounded-b-lg'}>
      <Text align={'left'} color={'grey'} className={'w-32 order-1 ml-3 md:ml-6'} typography={'tiny'}>{Object.values(filteredList).length} items left</Text>
      <Button onClick={handleClearCompleted} size={'small'} className={'w-32 !px-0 order-3 mr-3 md:mr-6'} color={'gray'} variant={'text'}>Clear Completed</Button>
      <Div className={'gap-5 grow justify-center order-4 md:order-2 h-12 mt-4 md:mt-0 bg-white rounded-lg items-center'}>
        <Button onClick={handleAllFilters} size={'small'} className={'!p-0'} color={filterType === 'all' ? 'primary' : 'gray'} variant={'text'}>All</Button>
        <Button onClick={handleActiveFilters} size={'small'} className={'!p-0'} color={filterType === 'active' ? 'primary' : 'gray'} variant={'text'}>Active</Button>
        <Button onClick={handleIsCompletedFilters} size={'small'} className={'!p-0'} color={filterType === 'isCompleted' ? 'primary' : 'gray'} variant={'text'}>Completed</Button>
      </Div>
    </Div>
  );
};

export default TodoActionsComponent;
