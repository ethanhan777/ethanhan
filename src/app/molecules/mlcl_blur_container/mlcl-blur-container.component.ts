import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'mlcl-blur-container',
  templateUrl: './mlcl-blur-container.component.html',
  styleUrls: ['./mlcl-blur-container.component.scss']
})
export class MlclBlurContainerComponent implements OnInit {
  @Input() title: string;
  @Input() paragraph: string;
  @Input() displaySocial: boolean;
  @Input() position?: string;

  constructor() {}

  ngOnInit() {
    // this.subscriptions.add();
  }
}
