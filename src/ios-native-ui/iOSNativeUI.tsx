import * as _Ons from "react-onsenui";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any, react-refresh/only-export-components
const Ons = _Ons as any;

type OnsButton = (props: {
  className?: string | undefined;
  modifier?: string | undefined;
  disabled?: boolean | undefined;
  ripple?: boolean | undefined;
  name?: string | undefined;
  icon?: string | undefined;
  onClick?(e?: React.MouseEvent<HTMLElement>): void;
  children: React.ReactNode;
}) => JSX.Element;

type OnsAlertDialog = (props: {
  onCancel?(): void;
  isOpen?: boolean | undefined;
  isCancelable?: boolean | undefined;
  isDisabled?: boolean | undefined;
  animation?: "none" | "default" | undefined;
  modifier?: string | undefined;
  maskColor?: string | undefined;
  animationOptions?: _Ons.AnimationOptions | undefined;
  onPreShow?(): void;
  onPostShow?(): void;
  onPreHide?(): void;
  onPostHide?(): void;
  children: React.ReactNode;
}) => JSX.Element;

type OnsAlertDialogButton = (props: {
  onClick?(): void;
  modifier?: string | undefined;
  disabled?: boolean | undefined;
  children: React.ReactNode;
}) => JSX.Element;

type OnsNavigator = (props: {
  renderPage(
    route: {
      page: string;
    },
    navigator?: _Ons.Navigator
  ): React.JSX.Element;
  initialRouteStack?: string[] | undefined;
  initialRoute?: {
    page: string;
  };
  onPrePush?(): void;
  onPostPush?(): void;
  onPrePop?(): void;
  onPostPop?(): void;
  animation?: _Ons.NavigatorAnimationTypes | undefined;
  animationOptions?: _Ons.AnimationOptions | undefined;
}) => JSX.Element;

type OnsList = (props: {
  modifier?: string | undefined;
  dataSource?: unknown[] | undefined;
  renderRow?(row: unknown, index?: number): React.JSX.Element | undefined;
  renderFooter?(): React.JSX.Element | undefined;
  renderHeader?(): React.JSX.Element | undefined;
}) => JSX.Element;

type OnsItem = (props: {
  modifier?: string | undefined;
  tappable?: boolean | undefined;
  tapBackgroundColor?: string | undefined;
  lockOnDrag?: boolean | undefined;
  expandable?: boolean | undefined;
  expanded?: boolean | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: React.MouseEventHandler<any> | undefined;
  children?: React.ReactNode;
}) => JSX.Element;

type OnsPage = (props: {
  children?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  contentStyle?: any;
  modifier?: string | undefined;
  renderModal?(): void;
  renderToolbar?(): void;
  renderBottomToolbar?(): void;
  renderFixed?(): void;
  onInit?(): void;
  onShow?(): void;
  onHide?(): void;
  onInfiniteScroll?(doneCallback: () => void): void;
}) => JSX.Element;

export function useIOSNativeUI(): {
  Button: OnsButton;
  AlertDialog: OnsAlertDialog;
  AlertDialogButton: OnsAlertDialogButton;
  Navigator: OnsNavigator;
  Page: OnsPage;
  List: OnsList;
  ListItem: OnsItem;
} {
  return {
    Button: Ons.Button,
    AlertDialog: Ons.AlertDialog,
    AlertDialogButton: Ons.AlertDialogButton,
    Navigator: Ons.Navigator,
    Page: Ons.Page,
    List: Ons.List,
    ListItem: Ons.ListItem,
  };
}
