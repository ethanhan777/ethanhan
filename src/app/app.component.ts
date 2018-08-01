import { Component } from '@angular/core';

export const appComponentSelector = 'app-root';

@Component({
  selector: appComponentSelector,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ethan Han - Web Developer';
  subtitle = 'Create awesome things on the internet';
}
