import bodyParser from 'body-parser';
import express from 'express';
import exphbs from 'express-handlebars';
import  fs  from 'fs-extra';
import path from 'path';




const app = express();
const hbs = exphbs.create({ 
	extname: 'hbs'
});

const __dirname = path.resolve()
app.use(express.static( 'public'));
app.use(express.static( 'script'));
app.use(express.static( 'node_modules'))

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/cart', (req, res) => {
    res.render('cart');
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.put('/', (req, res) => {
  // Accesează datele trimise de pe client
  const data = req.body;
	try {
		fs.writeFileSync(path.join(__dirname, 'public', 'data', 'cart.json'), JSON.stringify(data));
		console.log("data up dated in josn file");
	} catch (error) {
		console.error(`Erorr to up to date json file: ${error}`);
	}
  	res.send(data)

//   res.send('Date primite și procesate cu succes');
});
app.delete('/cart', (req, res) => {
	// Accesează datele trimise de pe client
	const data = req.body;
	  try {
		  fs.writeFileSync(path.join(__dirname, 'public', 'data', 'cart.json'), JSON.stringify(data));
		  console.log("data deleted");
	  } catch (error) {
		  console.error(`Erorr to delete from json file: ${error}`);
	  }
		res.send(data)
  
  //   res.send('Date primite și procesate cu succes');
  });

  

  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.put('/cart', (req, res) => {
	// Accesează datele trimise de pe client
	const data = req.body;
	  try {
		  fs.writeFileSync(path.join(__dirname, 'public', 'data', 'cart.json'), JSON.stringify(data));
		  console.log("data up dated in josn file");
	  } catch (error) {
		  console.error(`Erorr to up to date json file: ${error}`);
	  }
		res.send(data)
  
  //   res.send('Date primite și procesate cu succes');
  });












app.listen(3000, () => {
	console.log('app run at the port 3000');
})