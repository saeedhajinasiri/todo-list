import { combineReducers } from 'redux';
import todoReducer from './todo/todo-reducer';
import alertReducer from './alert/alert-reducer';

const rootReducer: any = combineReducers({
  todo: todoReducer,
  alert: alertReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
