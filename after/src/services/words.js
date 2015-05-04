export class Words {
  getWord() {
    var jwt = localStorage.getItem('jwt');

    return fetch('http://localhost:3001/api/random-word', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + jwt
      }
    })
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      return JSON.parse(text);
    })
  }
}