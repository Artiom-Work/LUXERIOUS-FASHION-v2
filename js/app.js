'use strict';

let filterPopap = document.querySelector('.filters__popup');
let iconLabelFilter = document.querySelector('.filters__left-wrapper');
let labelFilter = document.querySelector('.filters__left-label');
let filterIcon = document.querySelector('.filters__left-icon');
let filterNavHeadings = document.querySelectorAll('.filters__nav-heading');
let checkboxesLabelNames = document.querySelectorAll('.filters__right-name');
let checkboxesLabelIcons = document.querySelectorAll('.filters__right-icon');
let checkBoxesLists = document.querySelectorAll('.filters__right-list');

iconLabelFilter.addEventListener('click', function (e) {
	filterPopap.classList.toggle('visibility-hidden');
	labelFilter.classList.toggle('filters__left-label--pink');
	filterIcon.classList.toggle('filters__left-icon--pink');

	if (filterIcon.getAttribute('src') === 'images/filter-icon.svg') {
		filterIcon.setAttribute('src', 'images/filter-icon-pink.svg');
	} else {
		filterIcon.setAttribute('src', 'images/filter-icon.svg');
	}
});

filterNavHeadings.forEach(function (heading) {
	heading.addEventListener('click', function (e) {
		e.target.nextElementSibling.classList.toggle('hidden');
	});
});

checkboxesLabelNames.forEach(function (name) {
	name.addEventListener('click', function (e) {
		checkBoxesLists.forEach(function (checkBoxesList) {
			if (!checkBoxesList.classList.contains('visibility-hidden')) {
				checkBoxesList.classList.add('visibility-hidden');
			} else {
				e.target.closest('.filters__right-label').nextElementSibling.classList.toggle('visibility-hidden');
			}
		});
	});
});
checkboxesLabelIcons.forEach(function (icon) {
	icon.addEventListener('click', function (e) {
		checkBoxesLists.forEach(function (checkBoxesList) {
			if (!checkBoxesList.classList.contains('visibility-hidden')) {
				checkBoxesList.classList.add('visibility-hidden');
			} else {
				e.target.closest('.filters__right-label').nextElementSibling.classList.toggle('visibility-hidden');
			}
		});
	});
});