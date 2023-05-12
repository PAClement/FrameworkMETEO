import authModel from "../models/authModel.js";

class AuthController {
    constructor(){
      this.is_authenticate = false
    }

    async connection(req, res) {
        const userInfo = await authModel.connectionModel(req.body.username, req.body.password)
        res.json(userInfo)
    }

    async register(req, res) {
        const userInfo = await authModel.registerModel(req.body)
        res.json(userInfo)
    }

    isAuthenticate(){
        this.isAuthenticate = true;
    }
}

export default new AuthController();