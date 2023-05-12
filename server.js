import express from 'express';
import CityController from './controllers/cityController.js';
import AuthController from './controllers/authController.js';
const app = express();
import bodyParser from "body-parser";

// create application/json parser
const jsonParser = bodyParser.json()

app.use(express.urlencoded({ extended: true }));

app.post('/search-city',jsonParser,CityController.searchCity);
app.post('/connection', jsonParser, AuthController.connection);
app.post('/register', jsonParser, AuthController.register);

app.listen(3000, () => {
    console.log('Serveur en écoute sur le port 3000');
})