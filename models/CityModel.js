class CityModel {
  constructor() {
    this.city_infos = [];
  }

  searchCity(city) {
    const url = 'https://prevision-meteo.ch/services/json/' + city;
    return fetch(url)
      .then(response => response.json())
      .then(data => {
          console.log(data)
        const temp = data.current_condition.tmp;
        const city_name = data.city_info.name;
        const weather = data.current_condition.condition;
        this.city_infos.push({ city_name, temp, weather });
        console.log("Cities object: ", this.city_infos);
        return this.city_infos;
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        return [];
      });
  }
  getCity() {
    console.log("dans la méthode getCity", this.city_infos);
    return this.city_infos;
  }
}
export default new CityModel();