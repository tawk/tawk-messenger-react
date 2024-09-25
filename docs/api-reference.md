# API Reference
Welcome to the [tawk.to](https://www.tawk.to) JavaScript API documentation.

The API provides a flexible set of methods that can be used in your web projects. To invoke one of
the methods below, please be sure to call a method after the embed code on your page.

Use the JavaScript API to manipulate the chat widget displayed on your website.

<br/>

## Table of contents
- [API Reference](#api-reference)
  - [Table of contents](#table-of-contents)
  - [tawkOnLoad](#tawkonload)
  - [tawkOnStatusChange](#tawkonstatuschange)
  - [tawkOnBeforeLoad](#tawkonbeforeload)
  - [tawkOnChatMaximized](#tawkonchatmaximized)
  - [tawkOnChatMinimized](#tawkonchatminimized)
  - [tawkOnChatHidden](#tawkonchathidden)
  - [tawkOnChatStarted](#tawkonchatstarted)
  - [tawkOnChatEnded](#tawkonchatended)
  - [tawkOnPrechatSubmit](#tawkonprechatsubmit)
  - [tawkOnOfflineSubmit](#tawkonofflinesubmit)
  - [tawkOnChatMessageVisitor](#tawkonchatmessagevisitor)
  - [tawkOnChatMessageAgent](#tawkonchatmessageagent)
  - [tawkOnChatMessageSystem](#tawkonchatmessagesystem)
  - [tawkOnAgentJoinChat](#tawkonagentjoinchat)
  - [tawkOnAgentLeaveChat](#tawkonagentleavechat)
  - [tawkOnChatSatisfaction](#tawkonchatsatisfaction)
  - [tawkOnVisitorNameChanged](#tawkonvisitornamechanged)
  - [tawkOnFileUpload](#tawkonfileupload)
  - [tawkOnTagsUpdated](#tawkontagsupdated)
  - [tawkOnUnreadCountChanged](#tawkonunreadcountchanged)
  - [tawkOnLoaded](#tawkonloaded)
  - [tawkOnBeforeLoaded](#tawkonbeforeloaded)
  - [tawkWidgetPosition](#tawkwidgetposition)
  - [tawkVisitor](#tawkvisitor)
  - [tawkMaximize](#tawkmaximize)
  - [tawkMinimize](#tawkminimize)
  - [tawkToggle](#tawktoggle)
  - [tawkPopup](#tawkpopup)
  - [tawkGetWindowType](#tawkgetwindowtype)
  - [tawkShowWidget](#tawkshowwidget)
  - [tawkHideWidget](#tawkhidewidget)
  - [tawkToggleVisibility](#tawktogglevisibility)
  - [tawkGetStatus](#tawkgetstatus)
  - [tawkIsChatMaximized](#tawkischatmaximized)
  - [tawkIsChatMinimized](#tawkischatminimized)
  - [tawkIsChatHidden](#tawkischathidden)
  - [tawkIsChatOngoing](#tawkischatongoing)
  - [tawkIsVisitorEngaged](#tawkisvisitorengaged)
  - [tawkEndChat](#tawkendchat)
  - [tawkSetAttributes](#tawksetattributes)
  - [tawkAddEvent](#tawkaddevent)
  - [tawkAddTags](#tawkaddtags)
  - [tawkRemoveTags](#tawkremovetags)
  - [secureMode](#securemode)
  - [customstyle](#customstyle)
    - [zIndex](#zindex)
    - [Visibility](#visibility)

<br/>

## tawkOnLoad
Callback function invoked right after the widget is rendered. This callback is not supported in
pop out chat window.

```js
function App() {
    const tawkOnLoad = () => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                tawkOnLoad={tawkOnLoad}/>
        </div>
    );
}
```

<br/>

## tawkOnStatusChange
Callback function invoked when the page status changes. The function will receive the changed
status which will be either online, away or offline. This callback is not supported in pop out
chat window.

```js
function App() {
    const tawkOnStatusChange = (status) => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                tawkOnStatusChange={tawkOnStatusChange}/>
        </div>
    );
}
```

<br/>

## tawkOnBeforeLoad
Callback function invoked right when Tawk_API is ready to be used and before the widget is rendered.
This callback is not supported in pop out chat window.

```js
function App() {
    const tawkOnBeforeLoad = () => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                tawkOnBeforeLoad={tawkOnBeforeLoad}/>
        </div>
    );
}
```

<br/>

## tawkOnChatMaximized
Callback function invoked when the widget is maximized. This callback is not supported in pop out
chat window.

```js
function App() {
    const tawkOnChatMaximized = () => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                tawkOnChatMaximized={tawkOnChatMaximized}/>
        </div>
    );
}
```

<br/>

## tawkOnChatMinimized
Callback function invoked when the widget is minimized. This callback is not supported in pop out
chat window.

```js
function App() {
    const tawkOnChatMinimized = () => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                tawkOnChatMinimized={tawkOnChatMinimized}/>
        </div>
    );
}
```

<br/>

## tawkOnChatHidden
Callback function invoked when the widget is hidden. This callback is not supported in pop out chat
window.

```js
function App() {
    const tawkOnChatHidden = () => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                tawkOnChatHidden={tawkOnChatHidden}/>
        </div>
    );
}
```

<br/>

## tawkOnChatStarted
Callback function invoked when the widget is started.

```js
function App() {
    const tawkOnChatStarted = () => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                tawkOnChatStarted={tawkOnChatStarted}/>
        </div>
    );
}
```

<br/>

## tawkOnChatEnded
Callback function invoked when the widget is ended. This callback is not supported in pop out chat
window.

```js
function App() {
    const tawkOnChatEnded = () => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                tawkOnChatEnded={tawkOnChatEnded}/>
        </div>
    );
}
```

<br/>

## tawkOnPrechatSubmit
Callback function invoked when the Pre-Chat Form is submitted. The submitted form data is passed to
the function. This callback is not supported in pop out chat window.

```js
function App() {
    const tawkOnPrechatSubmit = (data) => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                tawkOnPrechatSubmit={tawkOnPrechatSubmit}/>
        </div>
    );
}
```

<br/>

## tawkOnOfflineSubmit
Callback function invoked when the Offline form is submitted. The submitted form data is passed to
the function. Form data will contain {name : ”, email : ”, message : ”, questions : []}. This
callback is not supported in pop out chat window.

```js
function App() {
    const tawkOnOfflineSubmit = (data) => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                tawkOnOfflineSubmit={tawkOnOfflineSubmit}/>
        </div>
    );
}
```

<br/>

## tawkOnChatMessageVisitor
Callback function invoked when message is sent by the visitor. The message is passed to the
function. This callback is not supported in pop out chat window.

```js
function App() {
    const tawkOnChatMessageVisitor = (message) => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                tawkOnChatMessageVisitor={tawkOnChatMessageVisitor}/>
        </div>
    );
}
```

<br/>

## tawkOnChatMessageAgent
Callback function invoked when message is sent by the agent. The message is passed to the function.
This callback is not supported in pop out chat window.

```js
function App() {
    const tawkOnChatMessageAgent = (message) => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                tawkOnChatMessageAgent={tawkOnChatMessageAgent}/>
        </div>
    );
}
```

<br/>

## tawkOnChatMessageSystem
Callback function invoked when message is sent by the system. The message is passed to the function.
This callback is not supported in pop out chat window.

```js
function App() {
    const tawkOnChatMessageSystem = (message) => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                tawkOnChatMessageSystem={tawkOnChatMessageSystem}/>
        </div>
    );
}
```

<br/>

## tawkOnAgentJoinChat
Callback function invoked when an agent joins the chat. The data is passed to the function. Will
contain {name : ”, position : ”, image : ”, id : ”}. This callback is not supported in pop out chat
window.

```js
function App() {
    const tawkOnAgentJoinChat = (data) => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                tawkOnAgentJoinChat={tawkOnAgentJoinChat}/>
        </div>
    );
}
```

<br/>

## tawkOnAgentLeaveChat
Callback function invoked when an agent leaves the chat. The data is passed to the function. Will
contain {name : ”, id : ”}. This callback is not supported in pop out chat window.

```js
function App() {
    const tawkOnAgentLeaveChat = (data) => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                tawkOnAgentLeaveChat={tawkOnAgentLeaveChat}/>
        </div>
    );
}
```

<br/>

## tawkOnChatSatisfaction
Callback function invoked when an agent leaves the chat. The satisfaction is passed to the function.
-1 = dislike | 0 = neutral | 1 = like. This callback is not supported in pop out chat window.

```js
function App() {
    const tawkOnChatSatisfaction = (satisfaction) => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                tawkOnChatSatisfaction={tawkOnChatSatisfaction}/>
        </div>
    );
}
```

<br/>

## tawkOnVisitorNameChanged
Callback function invoked when the visitor manually changes his name. The visitorName is passed to
the function. This callback is not supported in pop out chat window.

```js
function App() {
    const tawkOnVisitorNameChanged = (visitorName) => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                tawkOnVisitorNameChanged={tawkOnVisitorNameChanged}/>
        </div>
    );
}
```

<br/>

## tawkOnFileUpload
Callback function invoked when a file is uploaded. The link to the uploaded file is passed to the
function. This callback is not supported in pop out chat window.

```js
function App() {
    const tawkOnFileUpload = (link) => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                tawkOnFileUpload={tawkOnFileUpload}/>
        </div>
    );
}
```

<br/>

## tawkOnTagsUpdated
Callback function invoked when a tag is updated.

```js
function App() {
    const tawkOnTagsUpdated = (data) => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                tawkOnTagsUpdated={tawkOnTagsUpdated}/>
        </div>
    );
}
```

<br/>

## tawkOnUnreadCountChanged
Callback function invoked when active conversation unread count changed.

```js
function App() {
    const tawkOnUnreadCountChanged = (count) => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                tawkOnUnreadCountChanged={tawkOnUnreadCountChanged}/>
        </div>
    );
}
```

<br/>

## tawkOnLoaded
Returns a value (true or undefined) indicating when the plugin is ready.

```js
tawkMessengerRef.current.tawkOnLoaded();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const tawkOnLoad = () => {
        if (tawkMessengerRef.current.tawkOnLoaded()) {
            // do something before loaded
        }
    };

    return (
        <div>
            <TawkMessengerReact
                tawkOnLoad={tawkOnLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

<br/>

## tawkOnBeforeLoaded
Returns a value (true of undefined) indicating when plugin is initialized.

```js
tawkMessengerRef.current.tawkOnBeforeLoaded();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const tawkOnLoad = () => {
        if (tawkMessengerRef.current.tawkOnBeforeLoaded()) {
            // do something before loaded
        }
    };

    return (
        <div>
            <TawkMessengerReact
                tawkOnLoad={tawkOnLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

<br/>

## tawkWidgetPosition
Returns a string for current position of the widget.

```js
tawkMessengerRef.current.tawkWidgetPosition();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const tawkOnLoad = () => {
        if (tawkMessengerRef.current.tawkWidgetPosition() === 'br') {
            // do something if the widget is at bottom right
        }
    };

    return (
        <div>
            <TawkMessengerReact
                tawkOnLoad={tawkOnLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

<br/>

## tawkVisitor
Object used to set the visitor name and email. Do not place this object in a function, as the
values need to be available before the widget script is downloaded.

Setting or changing the values after the widget script has been downloaded will not send the
values to the dashboard.

If the name and email will not be available on load time (eg single page app, ajax login), then
use the [setAttributes](#setAttributes) function instead.

```js
tawkMessengerRef.current.tawkVisitor({
    name : 'name',
    email : 'email@email.com'
});

// Example

function App() {
    const tawkMessengerRef = useRef();

    const tawkOnLoad = () => {
        tawkMessengerRef.current.tawkVisitor({
            name : 'name',
            email : 'email@email.com'
        });
    };

    return (
        <div>
            <TawkMessengerReact
                tawkOnLoad={tawkOnLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

<br/>

## tawkMaximize
Maximizes the chat widget.

```js
tawkMessengerRef.current.tawkMaximize();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const tawkOnLoad = () => {
        tawkMessengerRef.current.tawkMaximize();
    };

    return (
        <div>
            <TawkMessengerReact
                tawkOnLoad={tawkOnLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

<br/>

## tawkMinimize
Minimizes the chat widget.

```js
tawkMessengerRef.current.tawkMinimize();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const tawkOnLoad = () => {
        tawkMessengerRef.current.tawkMinimize();
    };

    return (
        <div>
            <TawkMessengerReact
                tawkOnLoad={tawkOnLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

<br/>

## tawkToggle
Minimizes or Maximizes the chat widget based on the current state.

```js
tawkMessengerRef.current.tawkToggle();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const tawkOnLoad = () => {
        tawkMessengerRef.current.tawkToggle();
    };

    return (
        <div>
            <TawkMessengerReact
                tawkOnLoad={tawkOnLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

<br/>

## tawkPopup
Opens the chat widget as a pop out.

```js
tawkMessengerRef.current.tawkPopup();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const tawkOnLoad = () => {
        tawkMessengerRef.current.tawkPopup();
    };

    return (
        <div>
            <TawkMessengerReact
                tawkOnLoad={tawkOnLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

<br/>

## tawkGetWindowType
Returns the current widget type whether it’s inline or embed.

```js
tawkMessengerRef.current.tawkGetWindowType();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const tawkOnLoad = () => {
        if (tawkMessengerRef.current.tawkGetWindowType() === 'inline') {
            // do something if it's inline
        } else {
            // do something if it's embed
        }
    };

    return (
        <div>
            <TawkMessengerReact
                tawkOnLoad={tawkOnLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

<br/>

## tawkShowWidget
Shows the chat widget.

```js
tawkMessengerRef.current.tawkShowWidget();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const tawkOnLoad = () => {
        tawkMessengerRef.current.tawkShowWidget();
    };

    return (
        <div>
            <TawkMessengerReact
                tawkOnLoad={tawkOnLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

<br/>

## tawkHideWidget
Hide the chat widget.

```js
tawkMessengerRef.current.tawkHideWidget();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const tawkOnLoad = () => {
        tawkMessengerRef.current.tawkHideWidget();
    };

    return (
        <div>
            <TawkMessengerReact
                tawkOnLoad={tawkOnLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

<br/>

## tawkToggleVisibility
Hides or Shows the chat widget based on the current visibility state.

```js
tawkMessengerRef.current.tawkToggeVisibility();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const tawkOnLoad = () => {
        tawkMessengerRef.current.tawkToggeVisibility();
    };

    return (
        <div>
            <TawkMessengerReact
                tawkOnLoad={tawkOnLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

<br/>

## tawkGetStatus
Returns the current page status (online, away or offline).

```js
tawkMessengerRef.current.tawkGetStatus();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const tawkOnLoad = () => {
        const pageStatus = tawkMessengerRef.current.tawkGetStatus();

        if (pageStatus === 'online') {
            // do something for online
        } else if (pageStatus === 'away') {
            // do something for away
        } else {
            // do something for offline
        }
    };

    return (
        <div>
            <TawkMessengerReact
                tawkOnLoad={tawkOnLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

<br/>

## tawkIsChatMaximized
Returns a boolean value (true or false) indicating whether the chat widget is maximized.

```js
tawkMessengerRef.current.tawkIsChatMaximized();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const tawkOnLoad = () => {
        if (tawkMessengerRef.current.tawkIsChatMaximized()) {
            // do something if it's maximized
        }
    };

    return (
        <div>
            <TawkMessengerReact
                tawkOnLoad={tawkOnLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

<br/>

## tawkIsChatMinimized
Returns a boolean value (true or false) indicating whether the chat widget is minimized.

```js
tawkMessengerRef.current.tawkIsChatMinimized();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const tawkOnLoad = () => {
        if (tawkMessengerRef.current.tawkIsChatMinimized()) {
            // do something if it's minimized
        }
    };

    return (
        <div>
            <TawkMessengerReact
                tawkOnLoad={tawkOnLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

<br/>

## tawkIsChatHidden
Returns a boolean value (true or false) indicating whether the chat widget is hidden.

```js
tawkMessengerRef.current.tawkIsChatHidden();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const tawkOnLoad = () => {
        if (tawkMessengerRef.current.tawkIsChatHidden()) {
            // do something if chat widget is hidden
        }
    };

    return (
        <div>
            <TawkMessengerReact
                tawkOnLoad={tawkOnLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

<br/>

## tawkIsChatOngoing
Returns a boolean value (true or false) indicating whether currently there is an ongoing chat.

```js
tawkMessengerRef.current.tawkIsChatOngoing();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const tawkOnLoad = () => {
        if (tawkMessengerRef.current.tawkIsChatOngoing()) {
            // do something if there's ongoing chat
        }
    };

    return (
        <div>
            <TawkMessengerReact
                tawkOnLoad={tawkOnLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

<br/>

## tawkIsVisitorEngaged
Returns a boolean value (true or false) indicating whether the visitor is currently chatting or has
requested a chat.

```js
tawkMessengerRef.current.tawkIsVisitorEngaged();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const tawkOnLoad = () => {
        if (tawkMessengerRef.current.tawkIsVisitorEngaged()) {
            // do something if visitor engaged in chat
        }
    };

    return (
        <div>
            <TawkMessengerReact
                tawkOnLoad={tawkOnLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

<br/>

## tawkEndChat
Ends the current ongoing chat.

```js
tawkMessengerRef.current.tawkEndChat();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const tawkOnLoad = () => {
        tawkMessengerRef.current.tawkEndChat();
    };

    return (
        <div>
            <TawkMessengerReact
                tawkOnLoad={tawkOnLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

<br/>

## tawkSetAttributes
Set custom metadata regarding this chat/visitor.

This function takes in two values: attribute and callback.

The attribute value is of the object data type, which is a key value pair.

The key is of the string data type and can contain only alphanumeric characters and ‘-‘ (dash).

You can also use this function to set the visitor name and email. However, you will need to enable
the secure mode first and also supply the calculated hash value in this function.

Refer to the secure mode section below on how to do this.

The reason it needs to be in [secure mode](#securemode) is to ensure data integrity — to ensure the
value sent from the widget to the dashboard is true and has not been tampered with.

The callback, which is a function, will be invoked to notify whether the save failed.

Error messages returned:

1. INVALID_ATTRIBUTES: No attributes were sent
1. SESSION_EXPIRED: The visitor’s current session has expired
1. SERVER_ERROR: Internal server error
1. ACCESS_ERROR: Error in accessing the page
1. ATTRIBUTE_LIMIT_EXCEEDED: Total custom attributes (excluding name, email and hash) is 50
1. CONTAINS_INVALID_KEY: Custom key is not alphanumeric or dash (keys will be lower case)
1. CONTAINS_INVALID_VALUE: Custom value is empty or the total length is more than 255 characters

```js
tawkMessengerRef.current.tawkSetAttributes(attributes, callback);

// Example

function App() {
    const tawkMessengerRef = useRef();

    const tawkOnLoad = () => {
        tawkMessengerRef.current.tawkSetAttributes({
            id : 'A1234',
            store : 'Midvalley'
        }, function(error) {
            // do something if error
        });

        // Example for setting name and email

        tawkMessengerRef.current.setAttributes({
            name : 'name',
            store : 'name@email.com',
            hash : 'has value'
        }, function(error) {
            // do something if error
        });
    };

    return (
        <div>
            <TawkMessengerReact
                tawkOnLoad={tawkOnLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

<br/>

## tawkAddEvent
Set a custom event to chat.
This function takes in 3 values: event name, optional metadata and callback.

The event name is of the string data type and can contain only alphanumeric characters and ‘-‘ (dash)

The callback which is a function will be invoked to notify whether the save failed.

INVALID_EVENT_NAME, INVALID_ATTRIBUTES, ATTRIBUTE_LIMIT_EXCEEDED, CONTAINS_INVALID_KEY,
CONTAINS_INVALID_VALUE, SESSION_EXPIRED, SERVER_ERROR

```js
tawkMessengerRef.current.tawkAddEvent(eventName, metaData, callback);

// Example

function App() {
    const tawkMessengerRef = useRef();

    const tawkOnLoad = () => {
        tawkMessengerRef.current.tawkAddEvent(
            'requested-quotation',
            function(error) {
                // do something if error
            }
        );

        // Example with metadata

        tawkMessengerRef.current.tawkAddEvent(
            'requested-quotation',
            {
                sku : 'A0012',
                name : 'Jeans',
                price : '50'
            }
            function(error) {
                // do something if error
            }
        );
    };

    return (
        <div>
            <TawkMessengerReact
                tawkOnLoad={tawkOnLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

<br/>

## tawkAddTags
Add tags to the chat.
This function takes in two values; tags and callback.
This is of the array data type.
The content of the tags should be of the string data type.

The total number of tags is 10.
The callback, which is a function, will be invoked to notify whether the save failed.

INVALID_TAGS, TAG_LIMIT_EXCEEDED, VERSION_CONFLICT, SESSION_EXPIRED, SERVER_ERROR

```js
tawkMessengerRef.current.tawkAddTags(tags, callback);

// Example

function App() {
    const tawkMessengerRef = useRef();

    const tawkOnLoad = () => {
        tawkMessengerRef.current.tawkAddTags(
            [
                'hello',
                'world'
            ],
            function(error) {
                // do something if error
            }
        );
    };

    return (
        <div>
            <TawkMessengerReact
                tawkOnLoad={tawkOnLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

<br/>

## tawkRemoveTags
Remove tags from the chat.
This function takes in two values: tags and callback.
This is of the array data type.
The content of the tags should be of the string data type.

The callback, which is a function, will be invoked to notify whether the save failed.

INVALID_TAGS, TAG_LIMIT_EXCEEDED, SESSION_EXPIRED, SERVER_ERROR

```js
tawkMessengerRef.current.tawkRemoveTags(tags, callback);

// Example

function App() {
    const tawkMessengerRef = useRef();

    const tawkOnLoad = () => {
        tawkMessengerRef.current.tawkRemoveTags(
            [
                'hello',
                'world'
            ],
            function(error) {
                // do something if error
            }
        );
    };

    return (
        <div>
            <TawkMessengerReact
                tawkOnLoad={tawkOnLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

<br/>

## secureMode
Secure method is to ensure the data you are sending is actually from you.

To enable secure mode, embed following code on your page.

The hash is server side generated HMAC using SHA256, the user’s email and your site’s API key.

You can get your API key from **Admin>Property Settings**.

```js
tawkMessengerRef.current.visitor({
    name : 'name',
    email : 'email@email.com'
    hash : '<calculate-hash>'
});
```

<br/>

## customstyle
Object used to update the widget styling. Currently only supports zIndex style. Do not place this
object in a function, as the values need to be available before the widget script is downloaded.
Setting or changing the values after the widget script has been downloaded will not update the
widget’s style.

### zIndex
```js
<TawkMessengerReact
    customStyle={{ zIndex : Integer | String }}/>

// Example

function App() {
    return (
        <div>
            <TawkMessengerReact
                customStyle={{ zIndex : 1000 }}/>
        </div>
    );
}

function App() {
    return (
        <div>
            <TawkMessengerReact
                customStyle={{ zIndex : '1000' }}/>
        </div>
    );
}

function App() {
    return (
        <div>
            <TawkMessengerReact
                customStyle={{ zIndex : '1000 !important' }}/>
        </div>
    );
}
```

<br/>

### Visibility
```js
const customStyle = {
    visibility : {
        desktop : {
            xOffset : String | Integer, // '20' || 20
            yOffset : String | Integer,
            position : '' // 'br', 'bl', 'cr', 'cl', 'tr', 'tl'
        },

        mobile : {
            xOffset : String | Integer, // '20' || 20
            yOffset : String | Integer,
            position : '' // 'br', 'bl', 'cr', 'cl', 'tr', 'tl'
        }
    }
};

return (
    <TawkMessengerReact
        customStyle={ customStyle }/>
);

// Example

const customStyle = {
    visibility : {
        desktop : {
            xOffset : '15',
            yOffset : '15',
            position : 'cr'
        },

        mobile : {
            xOffset : 15,
            yOffset : 15,
            position : 'bl'
        }
    }
};

return (
    <TawkMessengerReact
        customStyle={ customStyle }/>
);
```