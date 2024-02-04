'use strict';

let menuWrapper = document.querySelector('.header__menu-dark');
let menu = document.querySelector('.header__menu');
let menuBarIcon = document.querySelector('.bar-icon');
let menuCloseIcon = document.querySelector('.menu__close');


function toggleMenu() {
	menuWrapper.classList.toggle('hidden');
	menu.classList.toggle('hidden');
}
menuBarIcon.addEventListener('click', toggleMenu);
menuCloseIcon.addEventListener('click', toggleMenu);