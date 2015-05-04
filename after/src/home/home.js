import {View, Component, If} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Words} from '../services/words';
import {Auth} from '../services/auth';

@Component({
  selector: 'home',
  injectables: [Words, Auth]
})
@View({
  templateUrl: 'home/home.html',
  directives: [If]
})
export class Home {
  constructor(router: Router, words: Words, auth: Auth) {
    this.router = router;
    this.auth = auth;
    this.words = words;

    this.isAuth = auth.isAuth();

    if (this.isAuth) {
      this.user = this.auth.getUser();
    }
  }

  getRandomWord() {
    this.words.getWord().then((response) => {
      this.word = response;
    });
  }

  login(event) {
    event.preventDefault();
    this.router.parent.navigate('/login');
  }

  logout(event) {
    event.preventDefault();
    this.auth.logout();
    this.isAuth = false;
    this.user = null;
  }
}