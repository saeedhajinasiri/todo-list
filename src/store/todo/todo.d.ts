export interface TodoProps {
  lists: Object<TodoItem>
  filteredList: Object<TodoItem>
  filterType: 'all' | 'active' | 'isCompleted',
}

export interface TodoItem {
  id: string
  title: string
  description: string
  isCompleted: boolean
}
