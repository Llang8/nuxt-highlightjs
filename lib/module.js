import {resolve} from 'path';

module.exports = function module (moduleOptions) {
    const defaults = {
        style: 'default'
    }
    const options = Object.assign(defaults, this.options.highlightjs, moduleOptions);

    this.addPlugin({
        src: resolve(__dirname, './plugins/plugin.js'),
        options
    })

    this.options.css.push({ src: `highlight.js/styles/${options.style}.css`, lang: 'css' });
}

// REQUIRED if publishing the module as npm package
module.exports.meta = require('../package.json')