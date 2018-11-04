import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'mlcl-social',
  templateUrl: './mlcl-social.component.html',
  styleUrls: ['./mlcl-social.component.scss']
})
export class MlclSocialComponent implements OnInit {
  @Input() heading: string;

  constructor() {}

  ngOnInit() {
    // this.subscriptions.add();
  }
}
