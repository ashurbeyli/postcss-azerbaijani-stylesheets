<img src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1ff.png?v7" alt="flag" width="32" /> PostCSS Azerbaijani Stylesheets [![Build Status][ci-img]][ci]
===

[PostCSS] plugin for writing Azerbaijan Style Sheets.

Inspired by [PostCSS-Russian-Stylesheets](https://github.com/Semigradsky/postcss-russian-stylesheets).

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/ashurbeyli/postcss-azerbaijani-stylesheets.svg
[ci]:      https://travis-ci.org/ashurbeyli/postcss-azerbaijani-stylesheets

## Input
```css
.some-class {
  hündürlük: 20px;
  rəng: 'ağ';
  arxafon: 'qara';
}
```


## Output
```css
.some-class {
  height: 20px;
  color: white;
  background: black;
}
```

## Usage
```js
postcss([ require('postcss-azerbaijani-stylesheets') ])
```

See [PostCSS] docs for examples for your environment.