import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'folder-structure';

  constructor() {
    console.log('AppComponent', 'will be logged after page initiallization');
  }
}
