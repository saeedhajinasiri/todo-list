import React from 'react';
import { Div, Text } from '@/components/elements';
import TodoForm from '@/components/modules/todo-form';
import TodoList from '@/components/modules/todo-list';
import TodoActions from '@/components/modules/todo-actions/todo-actions';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-16">
      <Div className={'flex-col w-full md:w-[540px] gap-6'}>
        <Text align={'left'} type={'bold'} typography={'large'} color={'white'}>TODO</Text>
        <TodoForm/>

        <Div className={'flex-col shadow-lg'}>
          <Div className={'flex-col bg-white w-full rounded-t-lg'}>
            <TodoList/>
          </Div>
          <TodoActions/>
        </Div>
      </Div>

    </main>
  );
}
