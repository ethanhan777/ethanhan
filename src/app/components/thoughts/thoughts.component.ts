import {
  Component,
  OnInit,
  OnDestroy,
  Injectable,
} from '@angular/core';
// import { Subscriber } from 'rxjs/Subscriber';

export const thoughtsSelector = 'thoughts';

@Component({
  selector: thoughtsSelector,
  templateUrl: './thoughts.component.html',
  styleUrls: ['./thoughts.component.scss']
})
@Injectable()
export class ThoughtsComponent implements OnInit, OnDestroy {
  // private subscriptions = new Subscriber();

  constructor() {}

  ngOnInit() {
    // this.subscriptions.add();
  }

  ngOnDestroy() {
    // this.subscriptions.unsubscribe();
  }
}
