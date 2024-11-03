import { useState } from "react";
import { useIOSNativeUI } from "./ios-native-ui/iOSNativeUI";
import IOSActionModalNavigation from "./ios-native-ui/iOSActionModalNavigation";
import IOSAlertDialog from "./ios-native-ui/iOSAlertDialog";

function App() {
  const { Button, List, ListItem } = useIOSNativeUI();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <IOSActionModalNavigation
      modals={{
        ActionModal: (modalNavigator) => (
          <List
            dataSource={["Row 1", "Row 2"]}
            renderRow={(row) => (
              <ListItem
                modifier="longdivider"
                onClick={() => {
                  console.log(row);
                  modalNavigator.hideModal();
                }}
              >
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {row as any}
              </ListItem>
            )}
          />
        ),
      }}
    >
      {(navigator) => (
        <>
          <Button onClick={() => setIsOpen(true)}>Show Dialog</Button>
          <Button onClick={() => navigator.showModal("ActionModal")}>
            Show Action Modal
          </Button>
          <IOSAlertDialog
            isOpen={isOpen}
            onClickCancel={() => setIsOpen(false)}
            onClickOK={() => setIsOpen(false)}
            title={"Warning!"}
            message={"An error has occurred!"}
          />
        </>
      )}
    </IOSActionModalNavigation>
  );
}

export default App;
