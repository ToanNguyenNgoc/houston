import { Dialog } from "@mui/material"
import { ReactNode } from "react";
import style from "./poup.module.css"

interface PopupProps {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
  title?: string
}

export const Popup = ({
  open,
  onClose,
  children,
  title = 'Thông báo'
}: PopupProps) => {
  return (
    <Dialog open={open} onClose={onClose} >
      <div className={style.container}>
        <p className={style.title}>{title}</p>
        {children}
      </div>
    </Dialog>
  )
}