# jQuery Clone

A lightweight reimplementation of jQuery featuring a $() selector engine, DOM helpers, event handling, and built-in request utilities using native browser features.

## Getting Started

### Installation

To use this, simply import the library into your TypeScript file.

```ts
import $ from 'https://raw.githubusercontent.com/bokshi-gh/jquery-clone/main/src/script.ts';
```

### Example Usage

```ts
import $ from 'https://raw.githubusercontent.com/bokshi-gh/jquery-clone/main/src/script.ts';

// Select an element and attach an event listener
$('#my-div').on('click', function() {
    alert('Div clicked!');
});
```
