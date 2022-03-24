'use strict';

// ZONE - js classes
const headerSquashedClass = 's-header--squashed';
const cardsWrapperLeftClass = 's-projects__cards-wrapper--shift-left-js';
const cardsWrapperRightClass = 's-projects__cards-wrapper--shift-right-js';

// ZONE - toggle header states

const initHeaderObserverTop = function (section, headerEl) {
    const headerExtend = function (entries) {
        if (entries[0].isIntersecting) {
            headerEl.classList.remove(headerSquashedClass);
        }
    };

    const bannerObserver = new IntersectionObserver(headerExtend, {
        root: null,
        threshold: 0.1,
    });

    bannerObserver.observe(section);
};

const initHeaderObserverBottom = function (section, headerEl) {
    const headerSquash = function (entries) {
        if (entries[0].isIntersecting) {
            headerEl.classList.add(headerSquashedClass);
        }
    };

    const bannerObserver = new IntersectionObserver(headerSquash, {
        root: null,
        threshold: 0.1,
    });

    bannerObserver.observe(section);
};

// ZONE - Project gallery

const displayProjectCard = function (target, cardPosition, cardsWrapper) {
    const cardWidth = target.getBoundingClientRect().width * 0.7;
    if (cardPosition === 'left') {
        cardsWrapper.style.transform = 'translate(' + cardWidth + 'px, 0)';
    }

    if (cardPosition === 'center') {
        cardsWrapper.style.transform = 'translate(0, 0)';
    }

    if (cardPosition === 'right')
        cardsWrapper.style.transform = 'translate(-' + cardWidth + 'px, 0)';
};

// ZONE - DOM Content Loaded

window.addEventListener('DOMContentLoaded', () => {
    const headerEl = document.querySelector('.js-header');
    const headerObserverTopEl = document.querySelector('.js-header-helper-top');
    const headerObserverBottomEl = document.querySelector(
        '.js-header-helper-bottom'
    );
    const projectCardLeftEl = document.querySelector('.js-project-card-left');
    const projectCardCenterEl = document.querySelector(
        '.js-project-card-center'
    );
    const projectCardRightEl = document.querySelector('.js-project-card-right');
    const projectCardsWrapperEl = document.querySelector(
        '.js-projects-cards-wrapper'
    );

    projectCardLeftEl.addEventListener('mouseenter', (e) => {
        displayProjectCard(e.target, 'left', projectCardsWrapperEl);
    });

    projectCardCenterEl.addEventListener('mouseenter', (e) => {
        displayProjectCard(e.target, 'center', projectCardsWrapperEl);
    });

    projectCardRightEl.addEventListener('mouseenter', (e) => {
        displayProjectCard(e.target, 'right', projectCardsWrapperEl);
    });

    initHeaderObserverTop(headerObserverTopEl, headerEl);
    initHeaderObserverBottom(headerObserverBottomEl, headerEl);
});
