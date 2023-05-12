import CityModel from '../models/CityModel.js';

class CityController {
  async searchCity(req, res) {
    console.log(req.body.city)
    const cityInfos = await CityModel.searchCity(req.body.city);
    res.json(cityInfos);
  }
}
    
export default new CityController();