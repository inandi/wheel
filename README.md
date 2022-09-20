# wheel
### Features

- Dynamic spinning wheel using this plugin
-  jquery-3.6.1.min.js [click here](https://code.jquery.com/jquery-3.6.1.min.js "click here")

###How to use:　

####JS code

```javascript
let firstSetData = [{
    "name": "1",
}, {
    "name": "2",
}, {
    "name": "3",
}, {
    "name": "4",
}, {
    "name": "5",
}, {
    "name": "6",
}, {
    "name": "7",
}, {
    "name": "8",
}, {
    "name": "9",
}, {
    "name": "10",
}];
let wheelFirstObject = {
    data: firstSetData,
    sourceId: 'foo',
    dynamicId: generateDynamicStringForWheelID(),
};
let wheelFirst = new Wheel(wheelFirstObject);
wheelFirst.run();
```
 
####HTML code

```html
<div id="foo">
</div>
```
 
 ![wheel](https://raw.githubusercontent.com/inandi/wheel/main/wheel.gif)