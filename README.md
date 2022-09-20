# wheel
### Features

- Dynamic spinning wheel using this plugin
-  jquery-3.6.1.min.js [click here](https://code.jquery.com/jquery-3.6.1.min.js "click here")

###How to use:　

####JS code

```javascript
// ++ first config for foo box ++
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
// -- first config for foo box --

// ++ second config for boo box ++
let secondSetData = [{
    "name": "gobinda",
}, {
    "name": "kamalesh",
}, {
    "name": "swapan",
}, {
    "name": "ankita",
}, {
    "name": "moumita",
}, {
    "name": "lalita",
}, {
    "name": "babu",
}, {
    "name": "niva",
}, {
    "name": "amyio",
}];

let wheelSecondObject = {
    data: secondSetData,
    sourceId: 'boo',
    counterShow: true,
    wheelfilterTogglerShow: true,
    dynamicId: generateDynamicStringForWheelID(),
};

let wheelSecond = new Wheel(wheelSecondObject);
wheelSecond.run();
// -- second config for boo box --
```
 
####HTML code

```html
<div id="foo">
</div>

<div id="boo">
</div>
```
 
 ![wheel](https://raw.githubusercontent.com/inandi/wheel/main/wheel.gif)