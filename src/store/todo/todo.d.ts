export interface TodoProps {
  lists: Object<TodoItem>
}

export interface TodoItem {
  id: string
  title: string
  description: string
  isCompleted: boolean
}
