declare module "tawk-messenger-react" {
  import type React from "react";
  type CallbackFunc = (...args: any[]) => any;

  export type TawkAPI = {
    onLoad: CallbackFunc;
    onStatusChange: CallbackFunc;
    onBeforeLoad: CallbackFunc;
    onChatMaximized: CallbackFunc;
    onChatMinimized: CallbackFunc;
    onChatHidden: CallbackFunc;
    onChatStarted: CallbackFunc;
    onChatEnded: CallbackFunc;
    onPrechatSubmit: CallbackFunc;
    onOfflineSubmit: CallbackFunc;
    onChatMessageVisitor: CallbackFunc;
    onChatMessageAgent: CallbackFunc;
    onChatMessageSystem: CallbackFunc;
    onAgentJoinChat: CallbackFunc;
    onAgentLeaveChat: CallbackFunc;
    onChatSatisfaction: CallbackFunc;
    onVisitorNameChanged: CallbackFunc;
    onFileUpload: CallbackFunc;
    onTagsUpdated: CallbackFunc;
    onUnreadCountChanged: CallbackFunc;
    visitor: { name: string; email: string };
    maximize: CallbackFunc;
    minimize: CallbackFunc;
    toggle: CallbackFunc;
    popup: CallbackFunc;
    getWindowType: () => "inline" | "embed";
    showWidget: CallbackFunc;
    hideWidget: CallbackFunc;
    toggleVisibility: CallbackFunc;
    getStatus: () => "online" | "away" | "offline";
    isChatMaximized: () => boolean;
    isChatMinimized: () => boolean;
    isChatHidden: () => boolean;
    isChatOngoing: () => boolean;
    isVisitorEngaged: () => boolean;
    endChat: () => boolean;
    setAttributes: (
      attributes: Record<string, string | number>,
      errCallback: (err?: any) => any
    ) => any;
    addEvent: (eventName: string, eventData: any) => any;
    addTags: (tags: string[]) => any;
    removeTags: (tags: string[]) => any;
    customStyle: Record<string, any>;
  };
  interface TawkMessengerProps {
    propertyId: string;
    widgetId: string;
    embedId?: string;
    customStyle?: any;
    onLoad?: CallbackFunc;
    onStatusChange?: CallbackFunc;
    onBeforeLoad?: CallbackFunc;
    onChatMaximized?: CallbackFunc;
    onChatMinimized?: CallbackFunc;
    onChatHidden?: CallbackFunc;
    onChatStarted?: CallbackFunc;
    onChatEnded?: CallbackFunc;
    onPrechatSubmit?: CallbackFunc;
    onOfflineSubmit?: CallbackFunc;
    onChatMessageVisitor?: CallbackFunc;
    onChatMessageAgent?: CallbackFunc;
    onChatMessageSystem?: CallbackFunc;
    onAgentJoinChat?: CallbackFunc;
    onAgentLeaveChat?: CallbackFunc;
    onChatSatisfaction?: CallbackFunc;
    onVisitorNameChanged?: CallbackFunc;
    onFileUpload?: CallbackFunc;
    onTagsUpdated?: CallbackFunc;
    onUnreadCountChanged?: CallbackFunc;
    ref?: React.Ref<TawkAPI>;
  }

  const TawkMessenger: React.SFC<TawkMessengerProps>;
  export default TawkMessenger;
}
