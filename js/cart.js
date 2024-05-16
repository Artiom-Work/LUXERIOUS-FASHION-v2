const counterProductIcon = document.querySelector('.cart-icon-counter');
const productList = document.querySelector('.product-box__list');
const productItems = document.querySelectorAll('.product-box__item');
const deleteProductButtons = document.querySelectorAll('.product__btn-delete');
const deleteProductBts = document.querySelectorAll('.product__btn-delete');
const clearProductBoxBtn = document.querySelector('.product-box__btn_clear');


let counterProduct = 2;

deleteProductButtons.forEach(function (button) {
	button.addEventListener('click', function (e) {
		const productItem = e.target.closest('.product-box__item');
		productItem.remove();
		counterProduct--;
		counterProductIcon.textContent = counterProduct;
		if (counterProduct === 0) {
			productList.remove();
			showFailBlock();
		}
	});
});
clearProductBoxBtn.addEventListener('click', function (e) {
	productList.remove();
	showFailBlock();
});

function showFailBlock() {
	document.querySelector('.product-box__fail').classList.remove('hidden');
}

