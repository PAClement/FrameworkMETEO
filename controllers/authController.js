import * as queryString from 'query-string';

class AuthController {
    constructor(){
      this.is_authenticate = false
    }

    authentWhithGithub(req, res){
      const params = queryString.stringify({
        client_id: process.env.APP_ID,
        redirect_uri: 'http://localhost:3000/auth',
        scope: ['read:user', 'user:email'].join(' '), // space seperated string
        allow_signup: true,
      });
      
      const githubLoginUrl = `https://github.com/login/oauth/authorize?${params}`;
      res.render(githubLoginUrl)
      // a compléter
    }

    isAuthenticate(){
        this.isAuthenticate = true;
    }
}

export default new AuthController();