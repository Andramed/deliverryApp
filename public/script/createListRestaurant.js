 class createListRestaurant {
	constructor(logo, nameRestaurant) {
		this.logo = logo;
		this.nameRestaurant = nameRestaurant;
	}
	creatListWithRestaurant() {
		let divListRestaurant = document.querySelector('.listRestaurant');
		let div = document.createElement('div');
		div.classList.add(`container${this.nameRestaurant}`, 'divRestaurant');
		let logo = document.createElement('img');
		logo.src = this.logo;
		logo.classList.add('logo');
		let btn = document.createElement('button');
		btn.classList.add(`btn${this.nameRestaurant}`, 'btnRestaurant');
		btn.textContent = this.nameRestaurant
		divListRestaurant.appendChild(div)
		div.appendChild(logo);
		div.appendChild(btn)
	}
}

const  giveRestaurantList = (products) => {
	const restaurants = Object.keys(products.products)
	restaurants.forEach((element) => {
		const restaurant = products.products[element];
		const nameRestaurant = element.replace('data', '');
   		let newRestaurant = new createListRestaurant(restaurant.logo, nameRestaurant)
		newRestaurant.creatListWithRestaurant()
	})
}
export{giveRestaurantList} 