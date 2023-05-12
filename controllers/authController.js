import * as queryString from 'query-string';

class AuthController {
    constructor(){
      this.is_authenticate = false
    }

    isAuthenticate(){
        this.isAuthenticate = true;
    }
}

export default new AuthController();