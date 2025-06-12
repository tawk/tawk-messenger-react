import { forwardRef, useEffect, useImperativeHandle } from "react";
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error(
      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
    );
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var PropTypes = propTypes.exports;
const isValidString = (value) => {
  if (!value || value.length === 0) {
    return false;
  }
  return value !== null && value !== void 0 && typeof value === "string";
};
const loadScript = ({ propertyId = "", widgetId = "", embedId = "", basePath = "tawk.to", autoStart = true }) => {
  if (embedId.length) {
    if (!document.getElementById(embedId)) {
      const element = document.createElement("div");
      element.id = embedId;
      document.body.appendChild(element);
    }
    window.Tawk_API.embedded = embedId;
  }
  if (!autoStart) {
    window.Tawk_API.autoStart = autoStart;
  }
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://embed.${basePath}/${propertyId}/${widgetId}`;
  script.charset = "UTF-8";
  script.setAttribute("crossorigin", "*");
  const firstScript = document.getElementsByTagName("script")[0];
  firstScript.parentNode.insertBefore(script, firstScript);
};
const TawkMessenger = forwardRef((props, ref) => {
  useEffect(() => {
    load();
  }, []);
  const load = () => {
    if (!isValidString(props.propertyId)) {
      console.error("[Tawk-messenger-react warn]: You didn't specified 'propertyId' property in the plugin.");
      return;
    }
    if (!isValidString(props.widgetId)) {
      console.error("[Tawk-messenger-react warn]: You didn't specified 'widgetId' property in the plugin.");
      return;
    }
    if (!window || !document) {
      return;
    }
    init();
  };
  const init = () => {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    loadScript({
      propertyId: props.propertyId,
      widgetId: props.widgetId,
      embedId: props.embedId,
      basePath: props.basePath,
      autoStart: props.autoStart
    });
    if (props.customStyle && typeof props.customStyle === "object") {
      window.Tawk_API.customStyle = props.customStyle;
    }
    mapCallbacks();
  };
  useImperativeHandle(ref, () => ({
    tawkStart: () => {
      return window.Tawk_API.start();
    },
    tawkShutdown: () => {
      return window.Tawk_API.shutdown();
    },
    tawkMaximize: () => {
      return window.Tawk_API.maximize();
    },
    tawkMinimize: () => {
      return window.Tawk_API.minimize();
    },
    tawkToggle: () => {
      return window.Tawk_API.toggle();
    },
    tawkPopup: () => {
      return window.Tawk_API.popup();
    },
    tawkShowWidget: () => {
      return window.Tawk_API.showWidget();
    },
    tawkHideWidget: () => {
      return window.Tawk_API.hideWidget();
    },
    tawkToggleVisibility: () => {
      return window.Tawk_API.toggleVisibility();
    },
    tawkEndChat: () => {
      return window.Tawk_API.endChat();
    },
    tawkGetWindowType: () => {
      return window.Tawk_API.getWindowType();
    },
    tawkGetStatus: () => {
      return window.Tawk_API.getStatus();
    },
    tawkIsChatMaximized: () => {
      return window.Tawk_API.isChatMaximized();
    },
    tawkIsChatMinimized: () => {
      return window.Tawk_API.isChatMinimized();
    },
    tawkIsChatHidden: () => {
      return window.Tawk_API.isChatHidden();
    },
    tawkIsChatOngoing: () => {
      return window.Tawk_API.isChatOngoing();
    },
    tawkIsVisitorEngaged: () => {
      return window.Tawk_API.isVisitorEngaged();
    },
    tawkOnLoaded: () => {
      return window.Tawk_API.onLoaded;
    },
    tawkOnBeforeLoaded: () => {
      return window.Tawk_API.onBeforeLoaded;
    },
    tawkWidgetPosition: () => {
      return window.Tawk_API.widgetPosition();
    },
    tawkVisitor: (data2) => {
      window.Tawk_API.visitor = data2;
    },
    tawkSetAttributes: (attribute, callback) => {
      window.Tawk_API.setAttributes(attribute, callback);
    },
    tawkAddEvent: (event, metadata, callback) => {
      window.Tawk_API.addEvent(event, metadata, callback);
    },
    tawkAddTags: (tags, callback) => {
      window.Tawk_API.addTags(tags, callback);
    },
    tawkRemoveTags: (tags, callback) => {
      window.Tawk_API.removeTags(tags, callback);
    },
    tawkSwitchWidget: (options, callback) => {
      window.Tawk_API.switchWidget(data, callback);
    }
  }));
  const mapCallbacks = () => {
    window.addEventListener("tawkLoad", () => {
      props.tawkOnLoad();
    });
    window.addEventListener("tawkStatusChange", (status) => {
      props.tawkOnStatusChange(status.detail);
    });
    window.addEventListener("tawkBeforeLoad", () => {
      props.tawkOnBeforeLoad();
    });
    window.addEventListener("tawkChatMaximized", () => {
      props.tawkOnChatMaximized();
    });
    window.addEventListener("tawkChatMinimized", () => {
      props.tawkOnChatMinimized();
    });
    window.addEventListener("tawkChatHidden", () => {
      props.tawkOnChatHidden();
    });
    window.addEventListener("tawkChatStarted", () => {
      props.tawkOnChatStarted();
    });
    window.addEventListener("tawkChatEnded", () => {
      props.tawkOnChatEnded();
    });
    window.addEventListener("tawkPrechatSubmit", (data2) => {
      props.tawkOnPrechatSubmit(data2.detail);
    });
    window.addEventListener("tawkOfflineSubmit", (data2) => {
      props.tawkOnOfflineSubmit(data2.detail);
    });
    window.addEventListener("tawkChatMessageVisitor", (message) => {
      props.tawkOnChatMessageVisitor(message.detail);
    });
    window.addEventListener("tawkChatMessageAgent", (message) => {
      props.tawkOnChatMessageAgent(message.detail);
    });
    window.addEventListener("tawkChatMessageSystem", (message) => {
      props.tawkOnChatMessageSystem(message.detail);
    });
    window.addEventListener("tawkAgentJoinChat", (data2) => {
      props.tawkOnAgentJoinChat(data2.detail);
    });
    window.addEventListener("tawkAgentLeaveChat", (data2) => {
      props.tawkOnAgentLeaveChat(data2.detail);
    });
    window.addEventListener("tawkChatSatisfaction", (satisfaction) => {
      props.tawkOnChatSatisfaction(satisfaction.detail);
    });
    window.addEventListener("tawkVisitorNameChanged", (visitorName) => {
      props.tawkOnVisitorNameChanged(visitorName.detail);
    });
    window.addEventListener("tawkFileUpload", (link) => {
      props.tawkOnFileUpload(link.detail);
    });
    window.addEventListener("tawkTagsUpdated", (data2) => {
      props.tawkOnTagsUpdated(data2.detail);
    });
    window.addEventListener("tawkUnreadCountChanged", (data2) => {
      props.tawkOnUnreadCountChanged(data2.detail);
    });
  };
  return null;
});
TawkMessenger.displayName = "TawkMessenger";
TawkMessenger.defaultProps = {
  customStyle: null,
  embedId: "",
  basePath: "tawk.to",
  tawkOnLoad: () => {
  },
  tawkOnStatusChange: () => {
  },
  tawkOnBeforeLoad: () => {
  },
  tawkOnChatMaximized: () => {
  },
  tawkOnChatMinimized: () => {
  },
  tawkOnChatHidden: () => {
  },
  tawkOnChatStarted: () => {
  },
  tawkOnChatEnded: () => {
  },
  tawkOnPrechatSubmit: () => {
  },
  tawkOnOfflineSubmit: () => {
  },
  tawkOnChatMessageVisitor: () => {
  },
  tawkOnChatMessageAgent: () => {
  },
  tawkOnChatMessageSystem: () => {
  },
  tawkOnAgentJoinChat: () => {
  },
  tawkOnAgentLeaveChat: () => {
  },
  tawkOnChatSatisfaction: () => {
  },
  tawkOnVisitorNameChanged: () => {
  },
  tawkOnFileUpload: () => {
  },
  tawkOnTagsUpdated: () => {
  },
  tawkOnUnreadCountChanged: () => {
  }
};
TawkMessenger.propTypes = {
  propertyId: PropTypes.string.isRequired,
  widgetId: PropTypes.string.isRequired,
  customStyle: PropTypes.object,
  embedId: PropTypes.string,
  basePath: PropTypes.string,
  tawkOnLoad: PropTypes.func,
  tawkOnStatusChange: PropTypes.func,
  tawkOnBeforeLoad: PropTypes.func,
  tawkOnChatMaximized: PropTypes.func,
  tawkOnChatMinimized: PropTypes.func,
  tawkOnChatHidden: PropTypes.func,
  tawkOnChatStarted: PropTypes.func,
  tawkOnChatEnded: PropTypes.func,
  tawkOnPrechatSubmit: PropTypes.func,
  tawkOnOfflineSubmit: PropTypes.func,
  tawkOnChatMessageVisitor: PropTypes.func,
  tawkOnChatMessageAgent: PropTypes.func,
  tawkOnChatMessageSystem: PropTypes.func,
  tawkOnAgentJoinChat: PropTypes.func,
  tawkOnAgentLeaveChat: PropTypes.func,
  tawkOnChatSatisfaction: PropTypes.func,
  tawkOnVisitorNameChanged: PropTypes.func,
  tawkOnFileUpload: PropTypes.func,
  tawkOnTagsUpdated: PropTypes.func,
  tawkOnUnreadCountChanged: PropTypes.func
};
export { TawkMessenger as default };
