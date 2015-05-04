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
      .then(() => router.config('/login', Login))
      .then(() => router.navigate('/home'));
  }
}