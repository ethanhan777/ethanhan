import {
  Component,
  OnInit,
  OnDestroy,
  Injectable,
} from '@angular/core';
// import { Subscriber } from 'rxjs/Subscriber';

export const headerSelector = 'my-header';

@Component({
  selector: headerSelector,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
@Injectable()
export class HeaderComponent implements OnInit, OnDestroy {
  // private subscriptions = new Subscriber();

  constructor() {}

  ngOnInit() {
    // this.subscriptions.add();
  }

  ngOnDestroy() {
    // this.subscriptions.unsubscribe();
  }
}
