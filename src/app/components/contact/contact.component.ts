import {
  Component,
  OnInit,
  OnDestroy,
  Injectable,
} from '@angular/core';
// import { Subscriber } from 'rxjs/Subscriber';

export const contactSelector = 'contact';

@Component({
  selector: contactSelector,
  templateUrl: './contact.component.html',
})
@Injectable()
export class ContactComponent implements OnInit, OnDestroy {
  // private subscriptions = new Subscriber();

  constructor() {}

  ngOnInit() {
    // this.subscriptions.add();
  }

  ngOnDestroy() {
    // this.subscriptions.unsubscribe();
  }
}
