import { combineReducers } from 'redux';
import todoReducer from './todo/todo-reducer';

const rootReducer: any = combineReducers({
  todo: todoReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
