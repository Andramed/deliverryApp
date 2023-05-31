import  { giveID, giveTheSameId, createListOfBuyedFood, giveProductByID } from './createListOfBuyedProduct.js'
import cartProducts from '/data/cart.json' assert {type: "json"}
import products from '/data/products.json' assert {type: "json"}
import deleteData from './deleteData.js';
import UserOrder from './userOrderInfo.js';
import putData from './putData.js';
import postData from './psotDataOrder.js';

let totalPrice = document.querySelector('.total-price');
let buyedFood = document.querySelector('.list-of-buyed-food');
let cartForm = document.querySelector('.cart-form');
let email = cartForm.childNodes[1].childNodes[1];
let firstName = cartForm.childNodes[3].childNodes[1].childNodes[1];
let lastName = cartForm.childNodes[3].childNodes[3].childNodes[1];
let phone = cartForm.childNodes[5].childNodes[1].childNodes[1];
let adress = cartForm.childNodes[5].childNodes[3].childNodes[1];
let btnSubmit = document.querySelector('.submit')








let restaurant = cartProducts[0]
let logoRest = products.products[`data${restaurant.restaurant}`].logo;
let newFoodOrder = []
let food = ''
let priceArray = []
let idiuri = giveTheSameId(giveID(cartProducts));
for (let prop in idiuri) {
	  let foodById = giveProductByID(prop, cartProducts);
	  food = new createListOfBuyedFood(foodById.id, foodById.img, foodById.nameFood, foodById.restaurant, logoRest, idiuri[prop], foodById.price)
	  food.createFoodCard();
	  priceArray.push(food.giveTotalPrice())
  }
food.createRestaurant()
buyedFood.addEventListener('click', (event) => {
	let clickedElement = event.target.classList
	if (clickedElement.value.includes('delete')) {
		console.log(clickedElement);
		let parentId = event.target.parentNode.parentNode.id
		console.log(parentId);
		newFoodOrder = cartProducts.filter((food) => food.id != parentId);
		console.log(newFoodOrder, 'new food order');
		deleteData('http://localhost:3000/cart', newFoodOrder)
			.then((data) => {
			  console.log(data); 
		})
		location.reload()	
	} else if (clickedElement.value.includes('plus')) {
		let price = event.target.parentNode.parentNode.querySelector('.price')
		let numOfOrder = event.target.parentNode.querySelector('.num-of-food');
		let	counter = Number(numOfOrder.textContent);
		counter ++
		price.textContent = (Number(price.id) * counter);
		numOfOrder.textContent = counter
		console.log(cartProducts);
		let parentId = event.target.parentNode.parentNode.id
		let index = cartProducts.findIndex(item => item.id == parentId);
		console.log(cartProducts);
		if (index != -1) {
			cartProducts.push(cartProducts[index])
		}
		
		putData('http://localhost:3000/cart', cartProducts)
		.then((data) => {
		  console.log(data); 
		});
		
	} else if (clickedElement.value.includes('minus')) {
		let price = event.target.parentNode.parentNode.querySelector('.price')
		let numOfOrder = event.target.parentNode.querySelector('.num-of-food');
		let	counter = Number(numOfOrder.textContent);
		counter --
		price.textContent = (Number(price.id) * counter);
		numOfOrder.textContent = counter
		console.log(cartProducts);
		let parentId = event.target.parentNode.parentNode.id
		let index = cartProducts.findIndex(item => item.id == parentId);
		console.log(cartProducts);
		if (index != -1) {
			cartProducts.splice(index, 1)
		}
		console.log(cartProducts);
		putData('http://localhost:3000/cart', cartProducts)
		.then((data) => {
		  console.log(data); 
		});
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
  totalPrice.textContent = `total price: ${total}`; // Actualizează cu `total` în loc de `price`
  
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'characterData' || mutation.type === 'childList') {
        const newPrice = Number(targetElement.textContent);
        if (!isNaN(newPrice)) {
          prices[idElement] = newPrice;
        }
        
        const total = Math.round((Object.values(prices).reduce((acc, curr) => acc + curr, 0))* 100) / 100 ;
        console.log('Total:', total);
        totalPrice.textContent = `total price: ${total}`; // Actualizează cu `total` în loc de `price`
      }
    });
  });

  const options = { characterData: true, childList: true, subtree: true };
  observer.observe(targetElement, options);
}


btnSubmit.addEventListener('click', () => {
	// event.preventDefault();
	let newOrder = new UserOrder(email.value, firstName.value, lastName.value, phone.value, adress.value, cartProducts);
	console.log(newOrder);
	postData('http://localhost:3000/cart', newOrder)
		.then((data) => {
		  console.log(data); 
	});
})