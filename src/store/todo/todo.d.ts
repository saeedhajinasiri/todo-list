export interface TodoProps {
  lists: Array<TodoItem>
  filteredList: Array<TodoItem>
  filterType: 'all' | 'active' | 'isCompleted',
}

export interface TodoItem {
  id: string
  title: string
  description: string
  isCompleted: boolean
}
