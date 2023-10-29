import '../styles/globals.css';
import { wrapper } from '@/store/store';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { TodoActions } from '@/store/todo/todo-action';

const App = ({ Component }: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TodoActions.getTodoListFromStorage());
  }, []);

  return (
    <Component/>
  );
};

export default wrapper.withRedux(App);
