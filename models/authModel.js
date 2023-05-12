import mariadb from 'mariadb'

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
            return conn.query(`SELECT * FROM user WHERE username = "${username}" && password = "${password}" `)
                .then((rows) => {
                    if (rows.length > 0) {

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
                .then((rows) => {
                    if (rows.affectedRows === 1) {

                        return [{
                            status: 200,
                            data: "Utilisateur ajouté"
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