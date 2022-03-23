'use strict';
// ZONE - js classes
const headerSquashedClass = 's-header--squashed';
// ZONE - toggle header states
const initHeaderObserverTop = function(section, headerEl) {
    const headerExtend = function(entries) {
        if (entries[0].isIntersecting) {
            console.log('remove the class');
            headerEl.classList.remove(headerSquashedClass);
        }
    };
    const bannerObserver = new IntersectionObserver(headerExtend, {
        root: null,
        threshold: 0.1
    });
    bannerObserver.observe(section);
};
const initHeaderObserverBottom = function(section, headerEl) {
    const headerSquash = function(entries) {
        if (entries[0].isIntersecting) {
            console.log('add the class');
            headerEl.classList.add(headerSquashedClass);
        }
    };
    const bannerObserver = new IntersectionObserver(headerSquash, {
        root: null,
        threshold: 0.1
    });
    bannerObserver.observe(section);
};
// ZONE - DOM Content Loaded
window.addEventListener('DOMContentLoaded', ()=>{
    const headerEl = document.querySelector('.js-header');
    const headerObserverTopEl = document.querySelector('.js-header-helper-top');
    const headerObserverBottomEl = document.querySelector('.js-header-helper-bottom');
    initHeaderObserverTop(headerObserverTopEl, headerEl);
    initHeaderObserverBottom(headerObserverBottomEl, headerEl);
});

//# sourceMappingURL=index.26f645e3.js.map
