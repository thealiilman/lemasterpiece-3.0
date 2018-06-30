const nav = document.querySelector('.nav-container');
const menu = document.querySelector('.menu');
const navLinksContainer = document.querySelector('.nav-links-container');
let isBodyBelowZero;

// Helpers
const toggleAttribute = (elem, attr, one, two) => {
  const elemDataAttribute = elem.getAttribute(attr);
  elem.setAttribute(attr, elemDataAttribute === one ? two : one);
};

// Events
window.addEventListener('scroll', () => {
  isBodyBelowZero = document.body.getBoundingClientRect().top < 0;

  if (isBodyBelowZero) {
    nav.setAttribute('data-position', 'below-zero');
  } else {
    nav.setAttribute('data-position', 'at-zero');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    nav.setAttribute('data-menu-opened', 'no');
  }
});

menu.addEventListener('click', () => {
  toggleAttribute(nav, 'data-menu-opened', 'no', 'yes');
});

navLinksContainer.addEventListener('click', () => {
  nav.setAttribute('data-menu-opened', 'no');
});