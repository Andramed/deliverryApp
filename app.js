import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';


const app = express();
const hbs = exphbs.create({ 
	extname: 'hbs'
});

const __dirname = path.resolve()


app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/cart', (req, res) => {
	res.render('cart')
})

app.use(express.static( 'public'));

app.listen(3000, () => {
	console.log('app run at the port 3000');
})