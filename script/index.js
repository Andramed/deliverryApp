
import products from '/data/products.json' assert {type: "json"}
import {giveRestaurantList} from './createListRestaurant.js';
import { giveProductsList } from './createCardOdFood.js';
import putData from './putData.js';



let selectedRestaurant = 'KFC';
let oldRestaurant = 'KFC';
let listOfBuyedFood = [];
giveProductsList(selectedRestaurant, products);
giveRestaurantList(products);

let numberOfBuyedProducts = document.querySelector('#counerOrderedProduct');
let containerProduct = document.querySelector('.cardContainer');

let counterProductBuyed = 0
let  btn = document.querySelectorAll('.btnRestaurant');
let btnArray = Array.from(btn);
containerProduct.addEventListener('click', (event) => {
    let elementClicked = event.target.textContent
    if (elementClicked === 'order') {
        let parentId = Number(event.target.parentNode.parentNode.id);
		let price = event.target.parentNode.querySelector('.price').textContent;
		let nameFood = event.target.parentNode.parentNode.querySelector('.nameFood').textContent;
		let img =event.target.parentNode.parentNode.querySelector('.imgFood').src;
        counterProductBuyed++
        numberOfBuyedProducts.textContent = counterProductBuyed;
        numberOfBuyedProducts.classList.remove('hidden'); 
		listOfBuyedFood.push({
			restaurant: selectedRestaurant,
			id: parentId,
			price: price,
			nameFood: nameFood,
			img: img
		})
		console.log(listOfBuyedFood);
		putData('http://localhost:3000/', listOfBuyedFood)
		.then((data) => {
		  console.log(data); 
		});
	        
    }
})
 
btnArray.forEach(button => {
  button.addEventListener('click', (event) => {
        oldRestaurant = selectedRestaurant
        selectedRestaurant = event.target.textContent;
        giveProductsList(selectedRestaurant, products);
        if(selectedRestaurant != oldRestaurant) {
          counterProductBuyed = 0
          numberOfBuyedProducts.textContent = counterProductBuyed;
          numberOfBuyedProducts.classList.add('hidden');
		 listOfBuyedFood = []
        }
  });
});

console.log(oldRestaurant, selectedRestaurant);










