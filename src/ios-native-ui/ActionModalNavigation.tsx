import { useIOSNativeUI } from "./iOSNativeUI";

interface ModalNavigator {
  showModal: () => void;
  hideModal: () => void;
}

interface Props {
  children: (navigator: ModalNavigator) => React.ReactNode;
}
export default function ActionModalNavigation(props: Props) {
  const { Button, Navigator, Page } = useIOSNativeUI();
  return (
    <>
      <Navigator
        animation="lift"
        renderPage={(route, navigator) => {
          const { page } = route;
          const actionModal = { page: "ActionModal" };
          const modalNavigator: ModalNavigator = {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            showModal: () => (navigator as any)?.pushPage(actionModal),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            hideModal: () => (navigator as any)?.popPage(),
          };
          return (
            <>
              {page == "Main" && <Page>{props.children(modalNavigator)}</Page>}
              {page == "ActionModal" && (
                <Page>
                  <div
                    style={{
                      backgroundColor: "#666666",
                      position: "fixed",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "white",
                        position: "fixed",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        top: 20,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <div style={{ position: "relative" }}>
                        <Button
                          modifier="quiet"
                          onClick={() => modalNavigator.hideModal()}
                        >
                          Back
                        </Button>
                      </div>
                    </div>
                  </div>
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
