'use strict';

const test = require('tape');
const css2jsobject = require('./index.js');

test('css2jsobject', t => {
  const css = `
    .list { background-color: #ff00ff; color: white; }
    #item { font-size: 2px; }
  `;
  const actual = css2jsobject(css);
  const expected = {
    ".list": {
      "background-color": "#ff00ff",
      "color": "white"
    },
    "#item": {
      "font-size": "2px"
    }
  };
  t.deepEqual(actual, expected, 'css2jsobject should convert css content to jsobject');
  t.end();
});
