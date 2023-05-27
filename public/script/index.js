
import products from '../data/products.json' assert {type: "json"}
import {giveRestaurantList} from './createListRestaurant.js';
import { giveProductsList } from './createCardOdFood.js';


let numberOfBuyedProducts = document.querySelector('#counerOrderedProduct');
let containerProduct = document.querySelector('.cardContainer');
let selectedRestaurant = ''
let counterProductBuyed = 0





  
  giveProductsList(null, products);
  giveRestaurantList(products);
 
  let  btn = document.querySelectorAll('.btnRestaurant');
  let btnArray = Array.from(btn);
  
 
 
btnArray.forEach(button => {
  button.addEventListener('click', (event) => {
  selectedRestaurant = event.target.textContent;
        giveProductsList(selectedRestaurant, products);
  });
});
  
containerProduct.addEventListener('click', (event) => {
  let elementClicked = event.target.textContent
  if (elementClicked === 'order') {
    let parentId = event.target.parentNode.parentNode.id;
    if(parentId.to)
  }
})
  









