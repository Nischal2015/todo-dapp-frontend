import { RefObject } from "react";
import { TodoProps } from "~/lib/fetchData";

export interface HoverSpanProps {
  size?: string;
}

export interface TodoModalContentProps {
  heading: string;
  titlePlaceholder: string;
  descriptionPlaceHolder: string;
  setOpenModal(value: boolean): void;
  buttonHandler: any;
  buttonText: string;
  titleRef: RefObject<HTMLInputElement>;
  descriptionRef: RefObject<HTMLTextAreaElement>;
  data?: TodoProps;
}
