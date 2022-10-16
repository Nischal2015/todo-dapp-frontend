import { ListProps } from "../List.d";

export interface ListItemProps extends ListProps {
  index: number;
  updateTodo(taskId: number, title: string, description: string): void;
}

export interface StyledListItemProps {
  isDragging: boolean;
}
