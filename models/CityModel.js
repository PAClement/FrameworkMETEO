class CityModel {

    searchCity(city) {
        const url = 'https://prevision-meteo.ch/services/json/' + city;
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                return {
                    city_name: data.city_info.name,
                    temp: data.current_condition.tmp,
                    weather: data.current_condition.condition
                }
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