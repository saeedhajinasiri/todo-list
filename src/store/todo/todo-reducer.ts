import { TodoActionTypes } from './todo-action';
import saveToLocal from '@/utils/storage/save-to-local';
import getFromLocal from '@/utils/storage/get-from-local';
import { TodoItem, TodoProps } from '@/store/todo/todo';

export const initialState: TodoProps = {
  lists: [],
  filteredList: [],
  filterType: 'all',
};

function todoReducer(state = initialState, action: any) {
  switch (action.type) {
    case TodoActionTypes.GET_TODO_LIST_FROM_STORAGE:
      const todoList = getFromLocal('todo-list');
      return {
        ...state,
        filterType: 'all',
        lists: todoList ? JSON.parse(todoList) : [],
        filteredList: todoList ? JSON.parse(todoList) : [],
      };

    case TodoActionTypes.ADD_TODO_ITEM:
      const timeStamp = (new Date()).getTime();
      const newList = state.lists;
      newList.push({
        id: timeStamp.toString(),
        title: action?.data?.title,
        description: action?.data?.description,
        isCompleted: false,
      });

      saveToLocal('todo-list', JSON.stringify(newList));
      return {
        ...state,
        filterType: 'all',
        lists: newList,
        filteredList: newList,
      };

    case TodoActionTypes.HANDLE_IS_COMPLETED:
      const isCompletedNewList = state.lists;
      const targetTodo = isCompletedNewList.findIndex((item: TodoItem) => item.id === action?.data?.id);
      isCompletedNewList[targetTodo]['isCompleted'] = !isCompletedNewList[targetTodo]['isCompleted'];

      saveToLocal('todo-list', JSON.stringify(isCompletedNewList));
      return {
        ...state,
        filterType: 'all',
        lists: isCompletedNewList,
        filteredList: isCompletedNewList,
      };

    case TodoActionTypes.HANDLE_REMOVE:
      const deletedNewList = state.lists;
      const targetDeleteIndexTodo = deletedNewList.findIndex((item: TodoItem) => item.id === action?.data?.id);
      deletedNewList.splice(targetDeleteIndexTodo, 1);

      saveToLocal('todo-list', JSON.stringify(state.lists));
      return {
        ...state,
        filterType: 'all',
        lists: deletedNewList,
        filteredList: deletedNewList,
      };

    case TodoActionTypes.HANDLE_ALL_FILTERS:
      return {
        ...state,
        filterType: 'all',
        filteredList: state.lists,
      };

    case TodoActionTypes.HANDLE_ACTIVE_FILTERS:
      return {
        ...state,
        filterType: 'active',
        filteredList: state.lists.filter((item: any) => !item.isCompleted),
      };

    case TodoActionTypes.HANDLE_IS_COMPLETED_FILTERS:
      return {
        ...state,
        filterType: 'isCompleted',
        filteredList: state.lists.filter((item: any) => item.isCompleted),
      };

    case TodoActionTypes.HANDLE_CLEAR_COMPLETED:
      const clearCompleted = state.lists.filter((item: any) => !item.isCompleted);

      saveToLocal('todo-list', JSON.stringify(clearCompleted));
      return {
        ...state,
        filterType: 'all',
        lists: clearCompleted,
        filteredList: clearCompleted,
      };

    default:
      return state;
  }
}

export default todoReducer;
