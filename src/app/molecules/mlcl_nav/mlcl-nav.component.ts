import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'mlcl-nav',
  templateUrl: './mlcl-nav.component.html',
  styleUrls: ['./mlcl-nav.component.scss']
})
export class MlclNavComponent implements OnInit {
  menuActive = false;

  constructor() {}

  ngOnInit() {
    // this.subscriptions.add();
  }

  menuToggle() {
    this.menuActive = !this.menuActive;
    const containerElements = document.getElementById("blur-container");

    if (this.menuActive) {
      containerElements.classList.add('nav-active');
    } else {
      containerElements.classList.remove('nav-active');
    }
  }
}
