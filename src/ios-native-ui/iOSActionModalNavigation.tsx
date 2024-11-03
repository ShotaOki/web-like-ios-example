import styled from "styled-components";
import { useIOSNativeUI } from "./iOSNativeUI";

interface ModalNavigator {
  showModal: (key: string) => void;
  hideModal: () => void;
}

interface Props {
  modals: Record<
    string,
    {
      title: string;
      nagivator: (navigator: ModalNavigator) => React.ReactNode;
    }
  >;
  children: (navigator: ModalNavigator) => React.ReactNode;
}
export default function IOSActionModalNavigation(props: Props) {
  const { Button, Navigator, Page, Toolbar } = useIOSNativeUI();

  const ActionModalBackground = styled.div`
    background-color: #666666;
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
  `;
  const ActionModalRadius = styled.div`
    background-color: white;
    position: fixed;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    top: 20px;
    left: 0px;
    bottom: 0px;
    right: 0px;
  `;
  const ActionModalView = styled.div`
    background-color: white;
    position: fixed;
    top: 30px;
    left: 0px;
    bottom: 0px;
    right: 0px;
  `;
  const ActionModalTitle = styled.div`
    padding: 0.2rem;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
  `;

  return (
    <>
      <Navigator
        animation="lift"
        renderPage={(route, navigator) => {
          const { page } = route;
          const modalNavigator: ModalNavigator = {
            showModal: (key: string) => navigator?.pushPage({ page: key }),
            hideModal: () => navigator?.popPage(),
          };
          return (
            <>
              {page == "Main" && (
                <Page key={"Main"}>{props.children(modalNavigator)}</Page>
              )}
              {Object.keys(props.modals)
                .filter((key) => key == page)
                .map((key) => (
                  <Page key={key}>
                    <ActionModalBackground>
                      <ActionModalRadius>
                        <ActionModalView>
                          <Page
                            renderFixed={() => (
                              <>
                                <Toolbar modifier="noshadow">
                                  <div className="center">
                                    <ActionModalTitle>
                                      {props.modals[key].title}
                                    </ActionModalTitle>
                                  </div>
                                  <div className="right">
                                    <Button
                                      modifier="quiet"
                                      onClick={() => modalNavigator.hideModal()}
                                    >
                                      Back
                                    </Button>
                                  </div>
                                </Toolbar>
                              </>
                            )}
                          >
                            {props.modals[key].nagivator(modalNavigator)}
                          </Page>
                        </ActionModalView>
                      </ActionModalRadius>
                    </ActionModalBackground>
                  </Page>
                ))}
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
