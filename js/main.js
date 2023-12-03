'use strict';

let menuWrapper = document.querySelector('.brand__menu-dark');
let menuBarIcon = document.querySelector('.bar-icon');
let menuCloseIcon = document.querySelector('.brand__menu-close');


function toggleMenu() {
	menuWrapper.classList.toggle('hidden');
}
menuBarIcon.addEventListener('click', toggleMenu);
menuCloseIcon.addEventListener('click', toggleMenu);