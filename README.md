# nuxt-highlightjs

> [Highlight.js](https://highlightjs.org/) syntax highlighting for [Nuxt.js](https://nuxtjs.org/)

[![NPM Version][npm-image]][npm-url]

## Setup

1. Add `nuxt-highlightjs` dependency to your project

```bash
npm install --save nuxt-highlightjs
```

2. Add `nuxt-highlightjs` to the `modules` section of `nuxt.config.js`

```js
  modules: [
    // Simple Usage
    'nuxt-highlightjs',
    
    // With Options
    ['nuxt-highlightjs', {
      // Module Options
    }]
  ],
```

## Usage

In your `.vue` template:
```html
      <!-- Adding codeblock content in HTML -->
      <pre>
        <code v-highlight class="javascript">console.log('Hello World')</code>
      </pre>

      <!-- Adding codeblock content with a variable 
        (where the variable 'code' lives in your component's data function) -->
      <pre>
        <code v-highlight="code" class="javascript">console.log('Hello World')</code>
      </pre>
```
The example above uses javascript highlighting, you can change the class on the code element to any of the [supported languages](https://highlightjs.org/static/demo/) to set the highlighting.

## License

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://img.shields.io/npm/v/nuxt-highlightjs.svg
[npm-url]: https://www.npmjs.com/package/nuxt-highlightjs
