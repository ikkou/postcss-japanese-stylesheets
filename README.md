# PostCSS Japanese Stylesheets

:japanese_goblin: [PostCSS] plugin for writing Japanese Stylesheets, especially for Japanese Traditional Colors.

[PostCSS]: https://github.com/postcss/postcss

## Input

```css
.foo {
  背景: 肌色 !重要;
  幅: 300px;
  高さ: 200px;
}

.bar {
  色: 暗黒色;
  行揃え: 中央寄せ;
  太さ: 太い;
  行高: 1.6;
}
```

## Output

```css
.foo {
  background: #fce2c4 !important;
  width: 300px;
  height: 200px;
}

.bar {
  color: #16160e;
  text-align: center;
  font-weight: bold;
  line-height: 1.6;
}
```

## Usage

```js
postcss([ require('postcss-japanese-stylesheets') ])
```

See [PostCSS] docs for examples for your environment.

## Thanks to

Inspiration from [postcss-russian-stylesheets](https://github.com/Semigradsky/postcss-russian-stylesheets)
