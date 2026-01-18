# jQuery Clone

A lightweight reimplementation of jQuery featuring a $() selector engine, DOM helpers, event handling, and built-in request utilities using native browser features.

## Getting Started

### Installation

To use this, simply import the library into your JavaScript file.

```ts
import $ from 'https://cdn.jsdelivr.net/gh/bokshi-gh/jquery-clone/src/main.js';
```

### Example Usage

```ts
import $ from 'https://cdn.jsdelivr.net/gh/bokshi-gh/jquery-clone/src/main.js';

// Select an element and attach an event listener
$('#my-div').on('click', function() {
    alert('Div clicked!');
});
```
