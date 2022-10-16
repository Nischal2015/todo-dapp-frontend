import { JSONShapeProps } from "~/utils";

export interface TodoProps {
  datas: JSONShapeProps;
  updateTodo(taskId: number, title: string, description: string): void;
}
