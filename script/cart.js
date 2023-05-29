import  { giveID, giveTheSameId, createListOfBuyedFood, giveProductByID } from './createListOfBuyedProduct.js'
import cartProducts from '/data/cart.json' assert {type: "json"}
import products from '/data/products.json' assert {type: "json"}
import deleteData from './deleteData.js';
let totalPrice = document.querySelector('.total-price');
let buyedFood = document.querySelector('.list-of-buyed-food');
let restaurant = cartProducts[0]
let logoRest = products.products[`data${restaurant.restaurant}`].logo;
let food = ''
let priceArray = []
let idiuri = giveTheSameId(giveID(cartProducts));
let counter = 1;
let oldParentID = 0; 
let currentParentID = 0; 
console.log(Object.keys(idiuri).length);
for (let prop in idiuri) {
	  console.log(`aici este: idul ${prop} aici decite ori se repeta ${idiuri[prop]}`);
	  let foodById = giveProductByID(prop, cartProducts);
	  food = new createListOfBuyedFood(foodById.id, foodById.img, foodById.nameFood, foodById.restaurant, logoRest, idiuri[prop], foodById.price)
	  food.createFoodCard();
	  priceArray.push(food.giveTotalPrice())
  }
food.createRestaurant()
let newFoodOrder =  [];
buyedFood.addEventListener('click', (event) => {
	
	let clickedElement = event.target.classList
	if (clickedElement.value.includes('delete')) {
		let parentId = event.target.parentNode.parentNode.parentNode.id
		newFoodOrder = cartProducts.filter((food) => food.id != parentId);
		console.log(newFoodOrder);
		deleteData('http://localhost:3000/cart', newFoodOrder)
			.then((data) => {
			  console.log(data); 
		})
		location.reload()	
	} else if (clickedElement.value.includes('plus')) {
		let parentId = event.target.parentNode.parentNode.parentNode.id;
		oldParentID = currentParentID; 
		currentParentID = parentId; 	
		if (oldParentID != currentParentID) {
			counter = 1
		}
		counter++
		let price = event.target.parentNode.parentNode.parentNode.querySelector('.price')
		let initialValue = Number(price.id)
		let numOfFood = event.target.parentNode.parentNode.querySelector('.num-of-food')
		let currentValuePrice = Math.round((initialValue * counter)* 100) / 100
		price.textContent = currentValuePrice
		numOfFood.textContent = counter
		
	} else if (clickedElement.value.includes('minus')) {
		let parentId = event.target.parentNode.parentNode.parentNode.id;
		oldParentID = currentParentID; 
		currentParentID = parentId; 	
		if (oldParentID != currentParentID) {
			counter = 1
		}
		counter--
		let price = event.target.parentNode.parentNode.parentNode.querySelector('.price')
		let initialValue = Number(price.id)
		let numOfFood = event.target.parentNode.parentNode.querySelector('.num-of-food')
		let currentValuePrice = Math.round((initialValue * counter)* 100) / 100
		price.textContent = currentValuePrice
		numOfFood.textContent = counter
	}
})

let prices = {};

for (let i = 0; i < Object.keys(buyedFood.children).length; i++) {
  const idElement = buyedFood.children[i].id;
  const targetElement = buyedFood.children[i].children[2];
  const price = Number(targetElement.textContent);
  
  if (!isNaN(price)) {
    prices[idElement] = price;
  }
  
  const total = Math.round((Object.values(prices).reduce((acc, curr) => acc + curr, 0))* 100) / 100 ;
  console.log('Total:', total);
  totalPrice.textContent = total
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'characterData' || mutation.type === 'childList') {
        const newPrice = Number(targetElement.textContent);
        if (!isNaN(newPrice)) {
          prices[idElement] = newPrice;
        }
        
        const total = Math.round((Object.values(prices).reduce((acc, curr) => acc + curr, 0))* 100) / 100 ;
        console.log('Total:', total);
		totalPrice.textContent = total
      }
    });
  });

  const options = { characterData: true, childList: true, subtree: true };
  observer.observe(targetElement, options);

}

console.log(prices);
