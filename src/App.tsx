import { useState } from "react";
import { useIOSNativeUI } from "./ios-native-ui/iOSNativeUI";
import ActionModal from "./ios-native-ui/ActionModal";

function App() {
  const { Button, AlertDialog, AlertDialogButton, Navigator, Page } =
    useIOSNativeUI();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navigator
        animation="lift"
        renderPage={(route, navigator) => {
          const { page } = route;
          return (
            <>
              {page == "Main" && (
                <Page>
                  <Button onClick={() => setIsOpen(true)}>Show Dialog</Button>
                  {/* Alert Dialog */}
                  <AlertDialog isOpen={isOpen}>
                    <div className="alert-dialog-title">Warning!</div>
                    <div className="alert-dialog-content">
                      An error has occurred!
                    </div>
                    <div className="alert-dialog-footer">
                      <AlertDialogButton onClick={() => setIsOpen(false)}>
                        Cancel
                      </AlertDialogButton>
                      <AlertDialogButton onClick={() => setIsOpen(false)}>
                        OK
                      </AlertDialogButton>
                    </div>
                  </AlertDialog>
                  <Button
                    onClick={() => navigator?.pushPage({ page: "ActionModal" })}
                  >
                    Show Action Modal
                  </Button>
                </Page>
              )}
              {page == "ActionModal" && (
                <Page>
                  <ActionModal></ActionModal>
                </Page>
              )}
            </>
          );
        }}
        initialRoute={{
          page: "Main",
        }}
      />
    </>
  );
}

export default App;
