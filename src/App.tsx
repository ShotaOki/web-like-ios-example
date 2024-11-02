import { useState } from "react";
import { useIOSNativeUI } from "./ios-native-ui/iOSNativeUI";
import ActionModalNavigation from "./ios-native-ui/ActionModalNavigation";

function App() {
  const { Button, AlertDialog, AlertDialogButton } = useIOSNativeUI();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ActionModalNavigation>
      {(navigator) => (
        <>
          <Button onClick={() => setIsOpen(true)}>Show Dialog</Button>
          {/* Alert Dialog */}
          <AlertDialog isOpen={isOpen}>
            <div className="alert-dialog-title">Warning!</div>
            <div className="alert-dialog-content">An error has occurred!</div>
            <div className="alert-dialog-footer">
              <AlertDialogButton onClick={() => setIsOpen(false)}>
                Cancel
              </AlertDialogButton>
              <AlertDialogButton onClick={() => setIsOpen(false)}>
                OK
              </AlertDialogButton>
            </div>
          </AlertDialog>
          <Button onClick={() => navigator.showModal()}>
            Show Action Modal
          </Button>
        </>
      )}
    </ActionModalNavigation>
  );
}

export default App;
