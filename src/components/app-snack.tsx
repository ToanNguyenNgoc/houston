import { Alert, AlertColor, Snackbar } from "@mui/material";
import { ReactNode } from "react";

interface AppSnackProps {
  open?: boolean;
  close?: () => void;
  severity?: AlertColor;
  children?: ReactNode;
  message?: string;
}

export function AppSnack(props: AppSnackProps) {
  const { open = false, close, severity = 'info', children, message } = props;
  const handleClose = () => {
    if (close) {
      close()
    }
  }
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open} autoHideDuration={4000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message || children}
      </Alert>
    </Snackbar>
  );
}