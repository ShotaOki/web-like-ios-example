import { useIOSNativeUI } from "./iOSNativeUI";

interface Props {
  isOpen: boolean;
  title: string;
  message: string;
  onClickCancel: () => void;
  onClickOK: () => void;
}
export default function IOSAlertDialog(props: Props) {
  const { AlertDialog, AlertDialogButton } = useIOSNativeUI();
  const { isOpen, onClickCancel, onClickOK, title, message } = props;

  return (
    <AlertDialog isOpen={isOpen}>
      <div className="alert-dialog-title">{title}</div>
      <div className="alert-dialog-content">{message}</div>
      <div className="alert-dialog-footer">
        <AlertDialogButton onClick={onClickCancel}>Cancel</AlertDialogButton>
        <AlertDialogButton onClick={onClickOK}>OK</AlertDialogButton>
      </div>
    </AlertDialog>
  );
}
