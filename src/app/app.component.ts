import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-base-class-content-children';
  onToggle(on): void {
    console.log('toggle', on);
  }
}
