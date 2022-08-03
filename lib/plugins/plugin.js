import Vue from 'vue';
import hljs from 'highlight.js';

Vue.directive('highlight', {
    deep: true,
    bind: highlight,
    update: highlight
});

function highlight(el, binding) {
    if (el.tagName !== 'CODE') {
        let blocks = el.querySelectorAll('code');
        
        blocks.forEach((block) => {
            highlight(block, binding);
        })
    } else {
        if (typeof binding.value === 'string') {
            el.textContent = binding.value;
        }
    
        hljs.highlightElement(el);
    }
}