import { Component } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export const appComponentSelector = 'app-root';

@Component({
  selector: appComponentSelector,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subtitle = 'Create awesome things on the internet';
  faChevronDown = faChevronDown;
  menuStatus = false;

  menuToggle() {
    this.menuStatus = !this.menuStatus;
  }
}
