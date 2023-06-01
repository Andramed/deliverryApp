class FoodInfo  {
	constructor(img, nameFood, price) {
		this.img = img;
		this.nameFood = nameFood;
		this.price = price
	} 
	creatCardFood() {
		let div = document.createElement('div');
		div.classList.add('container-buyed-food');
		let imgFood = document.createElement('img');
		imgFood.classList.add('photo-food')
		imgFood.src = this.img
		let nameFood = document.createElement('p');
		nameFood.classList.add('name-food')
		nameFood.textContent = this.nameFood
		let price = document.createElement('p');
		price.classList.add('price');
		price.textContent = this.price

		document.querySelector('.order-info').appendChild(div);
		div.appendChild(imgFood);
		div.appendChild(nameFood);
		div.appendChild(price)
	}
}
import orderInfo from '/data/orderInfo.json' assert {type: "json"}

let {email, firtsName, lastName,  phone, adres,  food} = orderInfo


	const createUserInfo = () => {
		let userInfo = document.querySelector('.user-info');
	  
		userInfo.innerHTML = `
		  <div class="bg-lime-50 p-4 rounded">
			<h2 class="text-lime-400 text-2xl font-bold mb-4">User Information</h2>
			<p class="text-lime-400"><strong>Email:</strong> ${email}</p>
			<p class="text-lime-400e"><strong>First Name:</strong> ${firtsName}</p>
			<p class="text-lime-400e"><strong>Last Name:</strong> ${lastName}</p>
			<p class="text-lime-400"><strong>Phone:</strong> ${phone}</p>
			<p class="text-lime-400"><strong>Address:</strong> ${adres}</p>
		  </div>
		  <button class="bg-blue text-white px-4 py-2 rounded mt-4" onclick="proceedToPayment()">Proceed to Payment</button>
			<div class="mt-4">
				<input type="text" id="captcha-input" class="border rounded px-2 py-1" placeholder="Enter captcha code">
				<img src="captcha-image.png" alt="Captcha Image" class="mt-2">
			</div>
		`;
	  };
  


createUserInfo()
console.log(food);
for (const element of food) {
	let { img, nameFood, price} = element
	let newFood = new FoodInfo(img, nameFood, price)
	newFood.creatCardFood()
	console.log(newFood);
}


// console.log(email, firtsName, lastName, phone, adres, restaurant);



