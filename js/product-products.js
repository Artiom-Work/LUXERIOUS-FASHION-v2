import { catalogProductsData } from "./data.js";

const productCards = JSON.parse(catalogProductsData);

const productsList = document.querySelector('.fetured__list');

let countOfCards = 2;

if (window.matchMedia("(min-width: 1000px)").matches) {
	countOfCards = 3;
};

function createTemplateProducts(products) {
	productsList.innerHTML = '';
	products.slice(0, countOfCards).forEach(({ image, altImage, name, description, currency, price }, i) => {

		const productCard = `
		<li class="fetured__item">
		<article class="brand-item">
			<div class="brand-item__image-wrapper">
				<img class="brand-item__item-image" src="${image}" alt="${altImage}">
				<div class="brand-item__hover-wrapper">
					<button class="brand-item__button">
						<img class="brand-item__button-image" src="images/fetured/add-to-cart-image.svg"
							alt="изображение карзины">
						<span class="brand-item__button-txt">Add to Cart</span>
					</button>
				</div>
			</div>
			<div class="brand-item__info-wrapper">
				<a class="brand-item__product-link" href="./product.html">
					<h3 class="brand-item__name">
						${name}
					</h3>
				</a>
				<p class="brand-item__description">
					${description}
				</p>
				<div class="brand-item__price">
					<span class="brand-item__price-currency">${currency}</span>
					<span class="brand-item__price-value">${price}.00</span>
				</div>
			</div>
		</article>
	</li>
			`
		productsList.insertAdjacentHTML('beforeend', productCard);
	});
}
window.addEventListener('load', createTemplateProducts(productCards));
