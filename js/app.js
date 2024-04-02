'use strict';
// === Нужно разнести функции от страниц product и catalog по разным js файлам === 

let filterPopap = document.querySelector('.filters__popup');
let iconLabelFilter = document.querySelector('.filters__left-wrapper');
let labelFilter = document.querySelector('.filters__left-label');
let filterIcon = document.querySelector('.filters__left-icon');
let filterNavHeadings = document.querySelectorAll('.filters__nav-heading');
let checkboxesLabelNames = document.querySelectorAll('.filters__right-name');
let checkboxesLabelIcons = document.querySelectorAll('.filters__right-icon');
let checkBoxesLists = document.querySelectorAll('.filters__right-list');



// labelFilter.addEventListener('click', function (e) {
// 	filterPopap.classList.toggle('hidden');
// 	labelFilter.classList.toggle('filters__left-label--pink');
// 	filterIcon.classList.toggle('filters__left-icon--pink');

// 	if (filterIcon.getAttribute('src') === 'images/filter-icon.svg') {
// 		filterIcon.setAttribute('src', 'images/filter-icon-pink.svg');
// 	} else {
// 		filterIcon.setAttribute('src', 'images/filter-icon.svg');
// 	}
// });

filterNavHeadings.forEach(function (heading) {
	heading.addEventListener('click', function (e) {
		e.target.nextElementSibling.classList.toggle('hidden');
	});
});

checkboxesLabelNames.forEach(function (name) {
	name.addEventListener('click', function (e) {
		checkBoxesLists.forEach(function (checkBoxesList) {
			if (!checkBoxesList.classList.contains('hidden')) {
				checkBoxesList.classList.add('hidden');
			} else {
				e.target.closest('.filters__right-label').nextElementSibling.classList.toggle('hidden');
			}
		});
	});
});
checkboxesLabelIcons.forEach(function (icon) {
	icon.addEventListener('click', function (e) {
		checkBoxesLists.forEach(function (checkBoxesList) {
			if (!checkBoxesList.classList.contains('hidden')) {
				checkBoxesList.classList.add('hidden');
			} else {
				e.target.closest('.filters__right-label').nextElementSibling.classList.toggle('hidden');
			}
		});
	});
});


// ====for page product . open/close product filters======
let productFilterListsNames = document.querySelectorAll('.product-characteristics__filters-name');
let productFilterListsIcons = document.querySelectorAll('.product-characteristics__filters-icon');

const decrementButton = document.querySelector('.product-quantity__decrement-button');
const incrementButton = document.querySelector('.product-quantity__increment-button');
const numberInput = document.getElementById('user-product-quantity');

productFilterListsNames.forEach(function (filterName) {
	filterName.addEventListener('click', function (e) {
		e.target.closest('.product-characteristics__filters-list-label').nextElementSibling.classList.toggle('hidden');

		if (!e.target.closest('.product-characteristics__filters-list-label').nextElementSibling.classList.contains('hidden')) {
			e.target.nextElementSibling.setAttribute('style', 'transform:rotate(180deg)');
		} else {
			e.target.nextElementSibling.setAttribute('style', 'transform:rotate(0deg)');
		}
	});
});


productFilterListsIcons.forEach(function (filterIcon) {
	filterIcon.addEventListener('click', function (e) {
		e.target.closest('.product-characteristics__filters-list-label').nextElementSibling.classList.toggle('hidden');

		if (!e.target.closest('.product-characteristics__filters-list-label').nextElementSibling.classList.contains('hidden')) {
			e.target.setAttribute('style', 'transform:rotate(180deg)');
		} else {
			e.target.setAttribute('style', 'transform:rotate(0deg)');
		}
	});
});

decrementButton.addEventListener('click', () => {
	if (numberInput.value > 0) {
		numberInput.value = parseInt(numberInput.value) - 1;
	}
});

incrementButton.addEventListener('click', () => {
	numberInput.value = parseInt(numberInput.value) + 1;
});







