export class Auth {
  constructor() {
    this.token = localStorage.getItem('jwt');
    this.user = this.token && jwt_decode(this.token);
  }

  isAuth() {
    return !!this.token;
  }

  getUser() {
    return this.user;
  }

  login(username, password) {
    return fetch('http://localhost:3001/sessions/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username, password
      })
    })
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      this.token = JSON.parse(text).id_token;
      localStorage.setItem('jwt', this.token);
    });
  }

  logout() {
    localStorage.removeItem('jwt');
    this.token = null;
    this.user = null;
  }
}