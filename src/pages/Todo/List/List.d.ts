import { ListItemProps } from "./ListItem";

export interface ListProps {
  id: string;
  title: string;
}

interface Columns {
  id: string;
  title: string;
  taskIds: string[];
}

export interface IListProps {
  datas: ListProps[];
  column: Columns;
  updateTodo(taskId: number, title: string, description: string): void;
}
