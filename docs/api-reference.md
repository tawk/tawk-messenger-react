# API Reference
Welcome to the [tawk.to](https://www.tawk.to) JavaScript API documentation.

The API provides a flexible set of methods that can be used in your web projects. To invoke one of
the methods below, please be sure to call a method after the embed code on your page.

Use the JavaScript API to manipulate the chat widget displayed on your website.

## Table of contents
- [API Reference](#api-reference)
  - [Table of contents](#table-of-contents)
  - [onLoad](#onload)
  - [onStatusChange](#onstatuschange)
  - [onBeforeLoad](#onbeforeload)
  - [onChatMaximized](#onchatmaximized)
  - [onChatMinimized](#onchatminimized)
  - [onChatHidden](#onchathidden)
  - [onChatStarted](#onchatstarted)
  - [onChatEnded](#onchatended)
  - [onPrechatSubmit](#onprechatsubmit)
  - [onOfflineSubmit](#onofflinesubmit)
  - [onChatMessageVisitor](#onchatmessagevisitor)
  - [onChatMessageAgent](#onchatmessageagent)
  - [onChatMessageSystem](#onchatmessagesystem)
  - [onAgentJoinChat](#onagentjoinchat)
  - [onAgentLeaveChat](#onagentleavechat)
  - [onChatSatisfaction](#onchatsatisfaction)
  - [onVisitorNameChanged](#onvisitornamechanged)
  - [onFileUpload](#onfileupload)
  - [onTagsUpdated](#ontagsupdated)
  - [visitor](#visitor)
  - [maximize](#maximize)
  - [minimize](#minimize)
  - [toggle](#toggle)
  - [popup](#popup)
  - [getWindowType](#getwindowtype)
  - [showWidget](#showwidget)
  - [hideWidget](#hidewidget)
  - [toggleVisibility](#togglevisibility)
  - [getStatus](#getstatus)
  - [isChatMaximized](#ischatmaximized)
  - [isChatMinimized](#ischatminimized)
  - [isChatHidden](#ischathidden)
  - [isChatOngoing](#ischatongoing)
  - [isVisitorEngaged](#isvisitorengaged)
  - [endChat](#endchat)
  - [setAttributes](#setattributes)
  - [addEvent](#addevent)
  - [addTags](#addtags)
  - [removeTags](#removetags)
  - [secureMode](#securemode)
  - [switchWidget](#switchwidget)
  - [customstyle](#customstyle)

## onLoad
Callback function invoked right after the widget is rendered. This callback is not supported in
pop out chat window.

```js
function App() {
    const onLoad = () => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                onLoad={onLoad}/>
        </div>
    );
}
```

## onStatusChange
Callback function invoked when the page status changes. The function will receive the changed
status which will be either online, away or offline. This callback is not supported in pop out
chat window.

```js
function App() {
    const onStatusChange = (status) => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                onStatusChange={onStatusChange}/>
        </div>
    );
}
```

## onBeforeLoad
Callback function invoked right when Tawk_API is ready to be used and before the widget is rendered.
This callback is not supported in pop out chat window.

```js
function App() {
    const onBeforeLoad = () => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                onBeforeLoad={onBeforeLoad}/>
        </div>
    );
}
```

## onChatMaximized
Callback function invoked when the widget is maximized. This callback is not supported in pop out
chat window.

```js
function App() {
    const onChatMaximized = () => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                onChatMaximized={onChatMaximized}/>
        </div>
    );
}
```

## onChatMinimized
Callback function invoked when the widget is minimized. This callback is not supported in pop out
chat window.

```js
function App() {
    const onChatMinimized = () => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                onChatMinimized={onChatMinimized}/>
        </div>
    );
}
```

## onChatHidden
Callback function invoked when the widget is hidden. This callback is not supported in pop out chat
window.

```js
function App() {
    const onChatHidden = () => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                onChatHidden={onChatHidden}/>
        </div>
    );
}
```

## onChatStarted
Callback function invoked when the widget is started.

```js
function App() {
    const onChatStarted = () => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                onChatStarted={onChatStarted}/>
        </div>
    );
}
```

## onChatEnded
Callback function invoked when the widget is ended. This callback is not supported in pop out chat
window.

```js
function App() {
    const onChatEnded = () => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                onChatEnded={onChatEnded}/>
        </div>
    );
}
```

## onPrechatSubmit
Callback function invoked when the Pre-Chat Form is submitted. The submitted form data is passed to
the function. This callback is not supported in pop out chat window.

```js
function App() {
    const onPrechatSubmit = (data) => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                onPrechatSubmit={onPrechatSubmit}/>
        </div>
    );
}
```

## onOfflineSubmit
Callback function invoked when the Offline form is submitted. The submitted form data is passed to
the function. Form data will contain {name : ”, email : ”, message : ”, questions : []}. This
callback is not supported in pop out chat window.

```js
function App() {
    const onOfflineSubmit = (data) => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                onOfflineSubmit={onOfflineSubmit}/>
        </div>
    );
}
```

## onChatMessageVisitor
Callback function invoked when message is sent by the visitor. The message is passed to the
function. This callback is not supported in pop out chat window.

```js
function App() {
    const onChatMessageVisitor = (message) => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                onChatMessageVisitor={onChatMessageVisitor}/>
        </div>
    );
}
```

## onChatMessageAgent
Callback function invoked when message is sent by the agent. The message is passed to the function.
This callback is not supported in pop out chat window.

```js
function App() {
    const onChatMessageAgent = (message) => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                onChatMessageAgent={onChatMessageAgent}/>
        </div>
    );
}
```

## onChatMessageSystem
Callback function invoked when message is sent by the system. The message is passed to the function.
This callback is not supported in pop out chat window.

```js
function App() {
    const onChatMessageSystem = (message) => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                onChatMessageSystem={onChatMessageSystem}/>
        </div>
    );
}
```

## onAgentJoinChat
Callback function invoked when an agent joins the chat. The data is passed to the function. Will
contain {name : ”, position : ”, image : ”, id : ”}. This callback is not supported in pop out chat
window.

```js
function App() {
    const onAgentJoinChat = (data) => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                onAgentJoinChat={onAgentJoinChat}/>
        </div>
    );
}
```

## onAgentLeaveChat
Callback function invoked when an agent leaves the chat. The data is passed to the function. Will
contain {name : ”, id : ”}. This callback is not supported in pop out chat window.

```js
function App() {
    const onAgentLeaveChat = (data) => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                onAgentLeaveChat={onAgentLeaveChat}/>
        </div>
    );
}
```

## onChatSatisfaction
Callback function invoked when an agent leaves the chat. The satisfaction is passed to the function.
-1 = dislike | 0 = neutral | 1 = like. This callback is not supported in pop out chat window.

```js
function App() {
    const onChatSatisfaction = (satisfaction) => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                onChatSatisfaction={onChatSatisfaction}/>
        </div>
    );
}
```

## onVisitorNameChanged
Callback function invoked when the visitor manually changes his name. The visitorName is passed to
the function. This callback is not supported in pop out chat window.

```js
function App() {
    const onVisitorNameChanged = (visitorName) => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                onVisitorNameChanged={onVisitorNameChanged}/>
        </div>
    );
}
```

## onFileUpload
Callback function invoked when a file is uploaded. The link to the uploaded file is passed to the
function. This callback is not supported in pop out chat window.

```js
function App() {
    const onFileUpload = (link) => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                onFileUpload={onFileUpload}/>
        </div>
    );
}
```

## onTagsUpdated
Callback function invoked when a tag is updated.

```js
function App() {
    const onTagsUpdated = (data) => {
        // place your code here
    }

    return (
        <div>
            <TawkMessengerReact
                onTagsUpdated={onTagsUpdated}/>
        </div>
    );
}
```

## visitor
Object used to set the visitor name and email. Do not place this object in a function, as the
values need to be available before the widget script is downloaded.

Setting or changing the values after the widget script has been downloaded will not send the
values to the dashboard.

If the name and email will not be available on load time (eg single page app, ajax login), then
use the [setAttributes](#setAttributes) function instead.

```js
tawkMessengerRef.current.visitor({
    name : 'name',
    email : 'email@email.com'
});

// Example

function App() {
    const tawkMessengerRef = useRef();

    const onLoad = () => {
        tawkMessengerRef.current.visitor({
            name : 'name',
            email : 'email@email.com'
        });
    };

    return (
        <div>
            <TawkMessengerReact
                onLoad={onLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

## maximize
Maximizes the chat widget.

```js
tawkMessengerRef.current.maximize();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const onLoad = () => {
        tawkMessengerRef.current.maximize();
    };

    return (
        <div>
            <TawkMessengerReact
                onLoad={onLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

## minimize
Minimizes the chat widget.

```js
tawkMessengerRef.current.minimize();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const onLoad = () => {
        tawkMessengerRef.current.minimize();
    };

    return (
        <div>
            <TawkMessengerReact
                onLoad={onLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

## toggle
Minimizes or Maximizes the chat widget based on the current state.

```js
tawkMessengerRef.current.toggle();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const onLoad = () => {
        tawkMessengerRef.current.toggle();
    };

    return (
        <div>
            <TawkMessengerReact
                onLoad={onLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

## popup
Opens the chat widget as a pop out.

```js
tawkMessengerRef.current.popup();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const onLoad = () => {
        tawkMessengerRef.current.popup();
    };

    return (
        <div>
            <TawkMessengerReact
                onLoad={onLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

## getWindowType
Returns the current widget type whether it’s inline or embed.

```js
tawkMessengerRef.current.getWindowType();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const onLoad = () => {
        if (tawkMessengerRef.current.getWindowType() === 'inline') {
            // do something if it's inline
        } else {
            // do something if it's embed
        }
    };

    return (
        <div>
            <TawkMessengerReact
                onLoad={onLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

## showWidget
Shows the chat widget.

```js
tawkMessengerRef.current.showWidget();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const onLoad = () => {
        tawkMessengerRef.current.showWidget();
    };

    return (
        <div>
            <TawkMessengerReact
                onLoad={onLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

## hideWidget
Hide the chat widget.

```js
tawkMessengerRef.current.hideWidget();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const onLoad = () => {
        tawkMessengerRef.current.hideWidget();
    };

    return (
        <div>
            <TawkMessengerReact
                onLoad={onLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```


## toggleVisibility
Hides or Shows the chat widget based on the current visibility state.

```js
tawkMessengerRef.current.toggeVisibility();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const onLoad = () => {
        tawkMessengerRef.current.toggeVisibility();
    };

    return (
        <div>
            <TawkMessengerReact
                onLoad={onLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

## getStatus
Returns the current page status (online, away or offline).

```js
tawkMessengerRef.current.getStatus();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const onLoad = () => {
        const pageStatus = tawkMessengerRef.current.getStatus();

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
                onLoad={onLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

## isChatMaximized
Returns a boolean value (true or false) indicating whether the chat widget is maximized.

```js
tawkMessengerRef.current.isChatMaximized();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const onLoad = () => {
        if (tawkMessengerRef.current.isChatMaximized()) {
            // do something if it's maximized
        }
    };

    return (
        <div>
            <TawkMessengerReact
                onLoad={onLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

## isChatMinimized
Returns a boolean value (true or false) indicating whether the chat widget is minimized.

```js
tawkMessengerRef.current.isChatMinimized();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const onLoad = () => {
        if (tawkMessengerRef.current.isChatMinimized()) {
            // do something if it's minimized
        }
    };

    return (
        <div>
            <TawkMessengerReact
                onLoad={onLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

## isChatHidden
Returns a boolean value (true or false) indicating whether the chat widget is hidden.

```js
tawkMessengerRef.current.isChatHidden();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const onLoad = () => {
        if (tawkMessengerRef.current.isChatHidden()) {
            // do something if chat widget is hidden
        }
    };

    return (
        <div>
            <TawkMessengerReact
                onLoad={onLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

## isChatOngoing
Returns a boolean value (true or false) indicating whether currently there is an ongoing chat.

```js
tawkMessengerRef.current.isChatOngoing();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const onLoad = () => {
        if (tawkMessengerRef.current.isChatOngoing()) {
            // do something if there's ongoing chat
        }
    };

    return (
        <div>
            <TawkMessengerReact
                onLoad={onLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

## isVisitorEngaged
Returns a boolean value (true or false) indicating whether the visitor is currently chatting or has
requested a chat.

```js
tawkMessengerRef.current.isVisitorEngaged();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const onLoad = () => {
        if (tawkMessengerRef.current.isVisitorEngaged()) {
            // do something if visitor engaged in chat
        }
    };

    return (
        <div>
            <TawkMessengerReact
                onLoad={onLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

## endChat
Ends the current ongoing chat.

```js
tawkMessengerRef.current.endChat();

// Example

function App() {
    const tawkMessengerRef = useRef();

    const onLoad = () => {
        tawkMessengerRef.current.endChat();
    };

    return (
        <div>
            <TawkMessengerReact
                onLoad={onLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

## setAttributes
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
tawkMessengerRef.current.setAttributes(attributes, callback);

// Example

function App() {
    const tawkMessengerRef = useRef();

    const onLoad = () => {
        tawkMessengerRef.current.setAttributes({
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
                onLoad={onLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

## addEvent
Set a custom event to chat.
This function takes in 3 values: event name, optional metadata and callback.

The event name is of the string data type and can contain only alphanumeric characters and ‘-‘ (dash)

The callback which is a function will be invoked to notify whether the save failed.

INVALID_EVENT_NAME, INVALID_ATTRIBUTES, ATTRIBUTE_LIMIT_EXCEEDED, CONTAINS_INVALID_KEY,
CONTAINS_INVALID_VALUE, SESSION_EXPIRED, SERVER_ERROR

```js
tawkMessengerRef.current.addEvent(eventName, metaData, callback);

// Example

function App() {
    const tawkMessengerRef = useRef();

    const onLoad = () => {
        tawkMessengerRef.current.addEvent(
            'requested-quotation',
            function(error) {
                // do something if error
            }
        );

        // Example with metadata

        tawkMessengerRef.current.addEvent(
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
                onLoad={onLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

## addTags
Add tags to the chat.
This function takes in two values; tags and callback.
This is of the array data type.
The content of the tags should be of the string data type.

The total number of tags is 10.
The callback, which is a function, will be invoked to notify whether the save failed.

INVALID_TAGS, TAG_LIMIT_EXCEEDED, VERSION_CONFLICT, SESSION_EXPIRED, SERVER_ERROR

```js
tawkMessengerRef.current.addTags(tags, callback);

// Example

function App() {
    const tawkMessengerRef = useRef();

    const onLoad = () => {
        tawkMessengerRef.current.addTags(
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
                onLoad={onLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

## removeTags
Remove tags from the chat.
This function takes in two values: tags and callback.
This is of the array data type.
The content of the tags should be of the string data type.

The callback, which is a function, will be invoked to notify whether the save failed.

INVALID_TAGS, TAG_LIMIT_EXCEEDED, SESSION_EXPIRED, SERVER_ERROR

```js
tawkMessengerRef.current.removeTags(tags, callback);

// Example

function App() {
    const tawkMessengerRef = useRef();

    const onLoad = () => {
        tawkMessengerRef.current.removeTags(
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
                onLoad={onLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

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

## switchWidget
Disconnect the current widget connection and switch to another widget.

```js
tawkMessengerRef.current.switchWidget(options);

// Example

function App() {
    const tawkMessengerRef = useRef();

    const onLoad = () => {
        tawkMessengerRef.current.switchWidget({
            propertyId ; 'property_id',
            widgetId : 'widget_id'
        }, function() {
            // do something
        });
    };

    return (
        <div>
            <TawkMessengerReact
                onLoad={onLoad}
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

## customstyle
Object used to update the widget styling. Currently only supports zIndex style. Do not place this
object in a function, as the values need to be available before the widget script is downloaded.
Setting or changing the values after the widget script has been downloaded will not update the
widget’s style.

```js
<TawkMessengerReact
    customStyle={{ zIndex : Integer|String }}/>

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
