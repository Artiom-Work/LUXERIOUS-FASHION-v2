import { productData } from "./data.js";

const productCards = JSON.parse(productData);

const productsList = document.querySelector('.fetured__list');

function createTemplateProducts(products) {
	productsList.innerHTML = '';
	products.forEach(({ image, altImage, name, description, currency, price }) => {
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
				<h3 class="brand-item__name">
				${name}
				</h3>
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
