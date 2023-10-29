import { TodoActionTypes } from './todo-action';
import saveToLocal from '@/utils/storage/save-to-local';
import getFromLocal from '@/utils/storage/get-from-local';
import { TodoProps } from '@/store/todo/todo';

export const initialState: TodoProps = {
  lists: {},
  filteredList: {},
  filterType: 'all',
};

function todoReducer(state = initialState, action: any) {
  switch (action.type) {
    case TodoActionTypes.GET_TODO_LIST_FROM_STORAGE:
      const todoList = getFromLocal('todo-list');
      return {
        ...state,
        filterType: 'all',
        lists: todoList ? JSON.parse(todoList) : {},
        filteredList: todoList ? JSON.parse(todoList) : {},
      };

    case TodoActionTypes.ADD_TODO_ITEM:
      const timeStamp = (new Date()).getTime();
      const newList = Object.assign({}, state.lists, {
        [timeStamp]: {
          id: timeStamp,
          title: action?.data?.title,
          description: action?.data?.description,
        },
      });

      saveToLocal('todo-list', JSON.stringify(newList));
      return {
        ...state,
        filterType: 'all',
        lists: newList,
        filteredList: newList,
      };

    case TodoActionTypes.HANDLE_IS_COMPLETED:
      const targetTodo = state.lists[action?.data?.id];
      const isCompletedNewList = Object.assign({}, state.lists, {
        [action?.data?.id.toString()]: {
          ...targetTodo,
          isCompleted: !targetTodo?.isCompleted,
        },
      });

      saveToLocal('todo-list', JSON.stringify(isCompletedNewList));
      return {
        ...state,
        filterType: 'all',
        lists: isCompletedNewList,
        filteredList: isCompletedNewList,
      };

    case TodoActionTypes.HANDLE_REMOVE:
      if (state.lists[action?.data?.id]) {
        delete state.lists[action?.data?.id];
      }

      saveToLocal('todo-list', JSON.stringify(state.lists));
      return {
        ...state,
        filterType: 'all',
        filteredList: state.lists,
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
        filteredList: Object.values(state.lists).filter((item: any) => !item.isCompleted),
      };

    case TodoActionTypes.HANDLE_IS_COMPLETED_FILTERS:
      return {
        ...state,
        filterType: 'isCompleted',
        filteredList: Object.values(state.lists).filter((item: any) => item.isCompleted),
      };

    case TodoActionTypes.HANDLE_CLEAR_COMPLETED:
      const clearCompleted = Object.values(state.lists).filter((item: any) => !item.isCompleted);

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
