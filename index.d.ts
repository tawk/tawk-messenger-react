declare module "TawkMessenger" {
  import type React from "react";

  const CallbackFunc = (...args:any[]) => any

  interface TawkMessengerProps {
    propertyId : string,
    widgetId : string,
    embedId : string,
    customStyle : any,
    onLoad : CallbackFunc,
    onStatusChange : CallbackFunc,
    onBeforeLoad : CallbackFunc,
    onChatMaximized : CallbackFunc,
    onChatMinimized : CallbackFunc,
    onChatHidden : CallbackFunc,
    onChatStarted : CallbackFunc,
    onChatEnded : CallbackFunc,
    onPrechatSubmit : CallbackFunc,
    onOfflineSubmit : CallbackFunc,
    onChatMessageVisitor : CallbackFunc,
    onChatMessageAgent : CallbackFunc,
    onChatMessageSystem : CallbackFunc,
    onAgentJoinChat : CallbackFunc,
    onAgentLeaveChat : CallbackFunc,
    onChatSatisfaction : CallbackFunc,
    onVisitorNameChanged : CallbackFunc,
    onFileUpload : CallbackFunc,
    onTagsUpdated : CallbackFunc,
    onUnreadCountChanged : CallbackFunc
  }

  export const TawkMessenger: (
    props: TawkMessengerProps
  ) => React.SFC<TawkMessengerProps>;
}
