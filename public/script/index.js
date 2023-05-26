import createCardOfFood from './createCardOdFood.js';
import products from '../data/products.json' assert {type: "json"}
import {giveRestaurantList} from './createListRestaurant.js';
// import { btn, elementClicked } from './variables.js';
let btn = document.getElementsByTagName('button')
let selectedRestaurant = ''



// btn.forEach((button) => {
// 	button.addEventListener('click', (target) => {
// 		elementClicked = target.value;
// 		console.log(elementClicked);
// 	})
// });


const giveProductsList = (selectedRestaurant) => {
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
  
  giveProductsList();
  giveRestaurantList(products);
  
  let btnArray = Array.from(btn);
  btnArray.forEach(button => {
	button.addEventListener('click', (event) => {
	  selectedRestaurant = event.target.textContent;
	  giveProductsList(selectedRestaurant);
	});
  });










