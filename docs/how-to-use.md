# How to Use

Here are the basic of how to use callbacks and expose functions from the plugin. You can see the
list of APIs in this [API reference](api-reference.md).

## Expose functions

To access the expose functions, you will need to use **useRef** from react. Create a constant
variable that will hold the **useRef()** and pass it in **TawkMessengerReact** component as a prop.

```js
import { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function App() {
    const tawkMessengerRef = useRef();

    const handleMinimize () => {
        tawkMessengerRef.current.minimize();
    };

    return (
        <div className="App">
            <button onClick={handleMinimize}> Minimize the Chat </button>

            <TawkMessengerReact
                propertyId="property_id"
                widgetId="default"
                ref={tawkMessengerRef}/>
        </div>
    );
}
```

## Using Callbacks

Using the API callbacks, pass a function as props on the callback you will used.

```js
function App() {
  const onLoad = () => {
    console.log('onLoad works!');
  };

  return (
    <div className="App">
      <TawkMessengerReact
        propertyId="property_id"
        widgetId="default"
        onLoad={onLoad}
      />
    </div>
  );
}
```
