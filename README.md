<h1 align="center">
    Notice: Still Under Development
</h1>

<br/><br/>

# ![tawk-messenger-react-banner](/images/banner.jpg)

<br/>

## Features
* Using Hooks
* Documented and Self explanaining methods
* Small size without any external libraries
* All Javascript API are available
* Maintained by [tawk.to](https://www.tawk.to/) team.

## Installation
The plugin is available in node and yarn package managers.
```bash
# Node
npm install tawk-messenger-react

# Yarn
yarn add tawk-messenger-react
```

## Quickstart
Import the **tawk-messenger-react** in your main component, The **propertyId** and **widgetId** 
will be found on your tawk dashboard **Administration > Chat Widget**. Using the API will need
to use the **useRef** to be able call the expose functions from the **tawk-messenger-react**.
```js
import TawkMessengerReact from 'tawk-messenger-react';

function App() {
    return (
        <div className="App">
            <TawkMessengerReact
                propertyId="property_id"
                widgetId="default"/>
        </div>
    );
}
```

## Documentation
This project includes a `docs` folder with more details on:
1.  [How to Use](docs/how-to-use.md)
1.  [API Reference](docs/api-reference.md)

## Other JS frameworks plugin
- [Vue Js](https://github.com/tawk/tawk-messenger-vue)
- [React Js](https://github.com/tawk/tawk-messenger-react)
- [Angular Js](https://github.com/tawk/tawk-messenger-angular)
- Ember Js

## Frequently Asked Questions

**Where you can approach us for suggestion or bug report?**

You can mention us on [Twitter](https://twitter.com/tawktotawk) or in our
[Website](https://www.tawk.to/) just message us.