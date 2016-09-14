# css2jsobject
A simple converter from CSS to JavaScript object

## Install

```
$ npm install css2jsobject --save
```

## Usage

```
const css2jsobject = require('css2jsobject');
const css = `
  .list { background-color: #ff00ff; }
  #item { font-size: 10px; }
`;
css2jsobject(css);
```

and below is the result.

```
{
  ".list": {
    "background-color": "#ff00ff"
  },
  "#item": {
    "font-size": "10px"
  }
}
```

## Requirement

* Node.js v6.3.0~

## Development

### Prepare for development

```
$ npm run init
```

### Run test


```
$ npm test
```
