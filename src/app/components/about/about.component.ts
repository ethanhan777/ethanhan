import {
  Component,
  OnInit,
  OnDestroy,
  Injectable,
} from '@angular/core';
// import { Subscriber } from 'rxjs/Subscriber';

export const aboutSelector = 'about';

@Component({
  selector: aboutSelector,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
@Injectable()
export class AboutComponent implements OnInit, OnDestroy {
  // private subscriptions = new Subscriber();

  constructor() {}

  ngOnInit() {
    // this.subscriptions.add();
  }

  ngOnDestroy() {
    // this.subscriptions.unsubscribe();
  }
}
