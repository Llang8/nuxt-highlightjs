import Vue from 'vue';
import hljs from 'highlight.js';

Vue.directive('highlight', {
    deep: true,
    bind: function(el, binding) {
        if (typeof binding.value === 'string') {
            el.textContent = binding.value;
        }

        hljs.highlightBlock(el);
    },
    update: function(el, binding) {
        if (typeof binding.value === 'string') {
            el.textContent = binding.value;
        }

        hljs.highlightBlock(el);
    }
});