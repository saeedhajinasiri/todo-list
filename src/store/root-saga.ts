import { spawn } from 'redux-saga/effects';
import todoMiddleware from '@/store/todo/todo-middleware';

export default function* rootSaga() {
  yield spawn(todoMiddleware);
}
