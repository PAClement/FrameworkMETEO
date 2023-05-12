import CityModel from '../models/CityModel.js';

class CityController {
  async searchCity(req, res) {
    console.log(req.body.city)
    const cityInfos = await CityModel.searchCity(req.body.city);
    // res.redirect('/');
    res.json(cityInfos);
  }
  async getCityController(req, res) {
    const cityInfos = await CityModel.getCity();
    res.render('index.ejs', { data: cityInfos });
  }
}
    
export default new CityController();