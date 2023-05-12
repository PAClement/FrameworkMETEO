import mariadb from 'mariadb'
import CityModel from "./CityModel.js";

class authModel {

    bddConnexion() {
        return mariadb.createPool({
            host: 'localhost',
            port: 4000,
            user: 'root',
            password: 'rootpwd',
            database: 'meteo',
            connectionLimit: 5
        })
    }

    connectionModel(username, password) {
        return this.bddConnexion().getConnection().then(conn => {
            return conn.query(`SELECT id, username, ville FROM user WHERE username = "${username}" && password = "${password}" `)
                .then(async (rows) => {
                    if (rows.length > 0) {
                        let meteo = await CityModel.searchCity(rows[0].ville)
                        rows.push(meteo);
                        return [{
                            status: 200,
                            data: rows
                        }]
                    } else {

                        return [{
                            status: 201,
                            data: "L'utilisateur n'existe pas"
                        }]
                    }

                })
        })
    }

    registerModel(data) {
        return this.bddConnexion().getConnection().then(conn => {
            return conn.query(`INSERT INTO user (id, username, password, ville) 
                    VALUES (null,"${data.username}","${data.password}","${data.ville}") `)
                .then(async (rows) => {
                    if (rows.affectedRows === 1) {

                        let meteo = await CityModel.searchCity(data.ville)

                        return [{
                            status: 200,
                            data: [{
                                username: data.username,
                                ville: data.ville,
                                meteo: meteo
                            }]
                        }]
                    } else {

                        return [{
                            status: 201,
                            data: "Impossible d'ajouté l'utilisateur"
                        }]
                    }
                })
        })
    }
}

export default new authModel();