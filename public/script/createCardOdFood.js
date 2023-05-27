 class createCardOfFood {
	constructor(nameFood, description, price, image, id, restaurantName){
		this.nameFood = nameFood;
		this.description = description;
		this.price = price;
		this.image = image;
		this.id = id;
		this.restaurantName = restaurantName
	}
	createDiv() {
		let cardContainer = document.querySelector('.cardContainer')
		let divWrapper = document.createElement('div');
		divWrapper.classList.add(`cardFood${this.restaurantName}`, 'card')
		let div = document.createElement('div');
		div.classList = `cardFood`;
		div.id = this.id
		let img = document.createElement('img');
		img.classList = 'imgFood'
		img.src = this.image;
		img.alt = 'image'
		let p = document.createElement('p');
		let pDescription = document.createElement('p');
		pDescription.classList = 'description'
		pDescription.textContent = this.description
		p.classList = 'nameFood'
		p.textContent = this.nameFood;
		let divPriceBtn = document.createElement('div');
		divPriceBtn.classList = 'dividePriceBtn';
		let span = document.createElement('span');
		span.classList = 'price';
		span.textContent = this.price
		let btn = document.createElement('button');
		btn.classList = 'btnOrder';
		btn.textContent = 'order'

		cardContainer.appendChild(divWrapper);
		divWrapper.appendChild(div)
		div.appendChild(img);
		div.appendChild(p);
		div.appendChild(pDescription)
		div.appendChild(divPriceBtn);
		divPriceBtn.appendChild(span);
		divPriceBtn.appendChild(btn)
	}
}




const giveProductsList = (selectedRestaurant, products, ) => {
	const productContainer = document.querySelector('.cardContainer');
	productContainer.innerHTML = '';
	if (selectedRestaurant == null) {
	  let selectedItems = products.products.dataKFC.items;
	  for (let item of selectedItems) {
		let newProduct = new createCardOfFood(item.nameFood, item.descriptions, item.price, item.img, item.id, 'KFC');
		newProduct.createDiv(productContainer);
	  }
	} else {
	  let selectedItems = products.products[`data${selectedRestaurant}`].items;
	  for (let item of selectedItems) {
		let newProduct = new createCardOfFood(item.nameFood, item.descriptions, item.price, item.img, item.id, selectedRestaurant);
		newProduct.createDiv(productContainer);
	  }
	}
  };

  export{giveProductsList}