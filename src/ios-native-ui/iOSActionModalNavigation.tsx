import styled from "styled-components";
import { useIOSNativeUI } from "./iOSNativeUI";
import { Flex } from "@aws-amplify/ui-react";

interface ModalNavigator {
  showModal: (key: string) => void;
  hideModal: () => void;
}

interface Props {
  modals: Record<string, (navigator: ModalNavigator) => React.ReactNode>;
  children: (navigator: ModalNavigator) => React.ReactNode;
}
export default function IOSActionModalNavigation(props: Props) {
  const { Button, Navigator, Page } = useIOSNativeUI();

  const ActionModalBackground = styled.div`
    background-color: #666666;
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
  `;
  const ActionModalView = styled.div`
    background-color: white;
    position: fixed;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    top: 20px;
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
                      <ActionModalView>
                        <Flex direction={"column"}>
                          <Flex
                            direction={"row"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            alignContent={"center"}
                            padding={2}
                          >
                            <div></div>
                            <ActionModalTitle>Title</ActionModalTitle>
                            <Button
                              modifier="quiet"
                              onClick={() => modalNavigator.hideModal()}
                            >
                              Back
                            </Button>
                          </Flex>
                          {props.modals[key](modalNavigator)}
                        </Flex>
                      </ActionModalView>
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
