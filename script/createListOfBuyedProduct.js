 class createListOfBuyedFood {
	constructor(id, img, foodName, restaurant, logoRestaurant, numOfBuyedProduct, price){
		this.id = id;
		this.img = img;
		this.foodName = foodName;
		this.restaurant = restaurant;
		this.logoRestaurant = logoRestaurant;
		this.numOfBuyedProduct = numOfBuyedProduct;
		this.price = Number(price);
		this.totalPrice = 0
	}

	giveTotalPrice() {
		this.totalPrice = this.price * this.numOfBuyedProduct
		return this.totalPrice
	}

	createRestaurant () {
		let div = document.createElement('div');
		div.classList.add('containerCartRestaurant')
		let img = document.createElement('img');
		img.classList.add('logo-restaurant-cart');
		img.src = this.logoRestaurant
		let span = document.createElement('span');
		span.classList.add('name-rest-cart')
		span.textContent = `Food buyed of: ${this.restaurant}`

		document.querySelector('.restaurnat-container').appendChild(div);
		div.appendChild(img);
		div.appendChild(span);
	}
	
	createFoodCard () {
		let div = document.createElement('div');
		div.classList.add('container-buyed-food');
		div.id = this.id;
		let imgFood = document.createElement('img');
		imgFood.classList.add('photo-food')
		imgFood.src = this.img
		let nameFood = document.createElement('p');
		nameFood.classList.add('name-food')
		nameFood.textContent = this.foodName

		let price = document.createElement('p');
		price.classList.add('price');
		price.textContent = this.giveTotalPrice();
		price.id = this.price

		let divChangeNumOFFood = document.createElement('div');
		divChangeNumOFFood.classList.add('change-num-of-food');

		// let btnMinus = document.createElement('button')
		// btnMinus.classList.add('minus-food');
		let imgMinus = document.createElement('img');
		imgMinus.classList.add('img-minus');
		imgMinus.src = 'https://www.svgrepo.com/show/155829/minus.svg'
		
		// let btnPlus = document.createElement('button');
		// btnPlus.classList.add('plus-food');
		let imgPlus = document.createElement('img');
		imgPlus.classList.add('img-plus');
		imgPlus.src = 'https://www.svgrepo.com/show/513660/circle-plus.svg'
		

		let numOFFood = document.createElement('p');
		numOFFood.textContent = this.numOfBuyedProduct
		numOFFood.classList.add('num-of-food');

		// let btnDeleteOrder = document.createElement('button');
		// btnDeleteOrder.classList.add('btn-delete-order');
		let imgDelete = document.createElement('img');
		imgDelete.src = 'https://www.svgrepo.com/show/511788/delete-1487.svg'
		imgDelete.classList.add('delete-img');

		document.querySelector('.list-of-buyed-food').appendChild(div);
		div.appendChild(imgFood);
		div.appendChild(nameFood);
		div.appendChild(price);
		div.appendChild(divChangeNumOFFood);
		
		divChangeNumOFFood.appendChild(numOFFood)
		// divChangeNumOFFood.appendChild(btnMinus)
		// divChangeNumOFFood.appendChild(btnPlus)
		divChangeNumOFFood.appendChild(imgDelete)
		divChangeNumOFFood.appendChild(imgMinus)
		divChangeNumOFFood.appendChild(imgPlus)
		
	}
	
}

const giveID = (data) => {
	let id = []
	for(let product of data){
		id.push(product.id)
	}
	return id
}
const giveTheSameId = (arrID) => {
	return arrID.reduce((count, id) => {
	  count[id] = (count[id] || 0) + 1;
	  return count;
	}, {});
  };
const giveProductByID = (id, data) => {
	for (const product of data) {
		if (product.id == id) {
			return product
		}
	}
}

export{
	createListOfBuyedFood,
	giveID,
	giveTheSameId,
	giveProductByID
}
 
