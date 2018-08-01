import {
  Component,
  OnInit,
  OnDestroy,
  Injectable,
} from '@angular/core';
// import { Subscriber } from 'rxjs/Subscriber';

export const profileSelector = 'profile';

@Component({
  selector: profileSelector,
  templateUrl: './profile.component.html',
})
@Injectable()
export class ProfileComponent implements OnInit, OnDestroy {
  // private subscriptions = new Subscriber();

  constructor() {}

  ngOnInit() {
    // this.subscriptions.add();
  }

  ngOnDestroy() {
    // this.subscriptions.unsubscribe();
  }
}
