!function(){var t=null,e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");a.disabled=!0,e.addEventListener("click",(function(){e.disabled=!0,a.disabled=!1,t=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));document.body.style.backgroundColor=t}),1e3)})),a.addEventListener("click",(function(){e.disabled=!1,a.disabled=!0,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.396b3bd6.js.map
