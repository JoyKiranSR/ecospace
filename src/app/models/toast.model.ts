import { ToastType } from "../enums/shared.enum";

export interface Toast {
  id: number;
  type: ToastType;
  message: string;
}
