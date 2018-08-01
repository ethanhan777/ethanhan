import {
  Component,
  OnInit,
  OnDestroy,
  Injectable,
} from '@angular/core';
// import { Subscriber } from 'rxjs/Subscriber';

export const skillsSelector = 'skills';

@Component({
  selector: skillsSelector,
  templateUrl: './skills.component.html',
})
@Injectable()
export class SkillsComponent implements OnInit, OnDestroy {
  // private subscriptions = new Subscriber();

  constructor() {}

  ngOnInit() {
    // this.subscriptions.add();
  }

  ngOnDestroy() {
    // this.subscriptions.unsubscribe();
  }
}
