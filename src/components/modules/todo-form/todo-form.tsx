import React from 'react';
import { Button, Div, TextField } from '@/components/elements';

const TodoForm = () => {
  return (
    <Div className={'flex-col gap-4'}>
      <TextField placeholder={'Todo Title'}/>
      <TextField placeholder={'Todo Description'} inputClassName={'!h-36'} multiline={true}/>
      <Button>
        Submit
      </Button>
    </Div>
  );
};

export default TodoForm;
