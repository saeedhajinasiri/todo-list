const preType = 'todo';

export const TodoActionTypes = {
  GET_TODO_LIST_FROM_STORAGE: `${preType}GET_TODO_LIST_FROM_STORAGE`,
  SET_TODO_LIST: `${preType}SET_TODO_LIST`,
  ADD_TODO_ITEM: `${preType}ADD_TODO_ITEM`,
  HANDLE_IS_COMPLETED: `${preType}HANDLE_IS_COMPLETED`,
  HANDLE_REMOVE: `${preType}HANDLE_REMOVE`,
};

const getTodoListFromStorage = () => ({ type: TodoActionTypes.GET_TODO_LIST_FROM_STORAGE });
const addTodoItem = (data: { title: string, description: string }) => ({ type: TodoActionTypes.ADD_TODO_ITEM, data: data });
const handleIsCompleted = (data: { id: string }) => ({ type: TodoActionTypes.HANDLE_IS_COMPLETED, data: data });
const handleRemove = (data: { id: string }) => ({ type: TodoActionTypes.HANDLE_REMOVE, data: data });

export const TodoActions = {
  getTodoListFromStorage: getTodoListFromStorage,
  addTodoItem: addTodoItem,
  handleIsCompleted: handleIsCompleted,
  handleRemove: handleRemove,
};
