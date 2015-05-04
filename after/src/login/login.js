import {Component, View} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Auth} from '../services/auth';

@Component({
  selector: 'login',
  injectables: [Auth]
})
@View({
  templateUrl: 'login/login.html'
})
export class Login {
  constructor(router: Router, auth: Auth) {
    this.router = router;
    this.auth = auth;
  }

  login(event, username, password) {
    event.preventDefault();
    this.auth.login(username, password).then(() => {
      this.router.parent.navigate('/home');
    })
    .catch((error) => {
      alert(error);
    });
  }
}