!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON");function u(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();var t=parseInt(document.querySelector('input[name="delay"]').value,10),o=parseInt(document.querySelector('input[name="step"]').value,10);!function(n,t,o){for(var r=[],a=t,c=0;c<n;c++){var l=u(c+1,a);l.then((function(n){e(i).Notify.success("✅ Fulfilled promise ".concat(n.position," in ").concat(n.delay,"ms"))})).catch((function(n){e(i).Notify.failure("❌ Rejected promise ".concat(n.position," in ").concat(n.delay,"ms"))})),r.push(l),a+=o}}(parseInt(document.querySelector('input[name="amount"]').value,10),t,o),document.querySelectorAll("input").forEach((function(e){e.value=""}))}))}();
//# sourceMappingURL=03-promises.30d55137.js.map
