import React, { useState } from 'react';
import { Button, Div, TextField } from '@/components/elements';
import { useDispatch } from 'react-redux';
import { TodoActions } from '@/store/todo/todo-action';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTodoItem = () => {
    dispatch(TodoActions.addTodoItem( { title, description } ));
    setDescription('');
    setTitle('');
  };

  const handleTitle = (event: any) => {
    if (event?.target?.value) {
      setTitle(event?.target?.value);
    }
  };

  const handleDescription = (event: any) => {
    if (event?.target?.value) {
      setDescription(event?.target?.value);
    }
  };

  return (
    <Div className={'flex-col gap-4'}>
      <TextField value={title} placeholder={'Todo Title'} onChange={handleTitle}/>
      <TextField value={description} placeholder={'Todo Description'} onChange={handleDescription} inputClassName={'!h-36'} multiline={true}/>
      <Button
        onClick={handleAddTodoItem}
        disabled={!(title && description)}>
        Submit
      </Button>
    </Div>
  );
};

export default TodoForm;
