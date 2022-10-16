export interface HoverSpanProps {
  size?: string;
}

export interface CreateTodoProps {
  addTodo(title: string, description: string): void;
}
