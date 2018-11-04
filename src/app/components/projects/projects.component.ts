import {
  Component,
  OnInit,
  OnDestroy,
  Injectable,
} from '@angular/core';
// import { Subscriber } from 'rxjs/Subscriber';

export const projectsSelector = 'projects';

@Component({
  selector: projectsSelector,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
@Injectable()
export class ProjectsComponent implements OnInit, OnDestroy {
  // private subscriptions = new Subscriber();

  constructor() {}

  ngOnInit() {
    // this.subscriptions.add();
  }

  ngOnDestroy() {
    // this.subscriptions.unsubscribe();
  }
}
