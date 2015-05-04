import {View, Component} from 'angular2/angular2';
import {Router, RouterOutlet} from 'angular2/router';
import {Home} from '../home/home';
import {Login} from '../login/login';

@Component({
  selector: 'words-app'
})
@View({
  template: `<router-outlet></router-outlet>`,
  directives: [RouterOutlet]
})
export class App {
  constructor(router: Router) {
    router
      .config('/home', Home)
      .then((_) => router.config('/login', Login, 'login'))
      .then((_) => router.navigate('/home', 'home'));
  }
}