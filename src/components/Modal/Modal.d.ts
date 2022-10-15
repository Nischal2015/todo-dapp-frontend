import { ReactElement } from "react";
import { Variant } from "~/types";

export type ModalVariant = {
  variant?: Variant;
};
export interface ModalProps extends ModalVariant {
  openModal: boolean;
  setOpenModal(value: boolean): void;
  renderContent: ReactElement;
}
