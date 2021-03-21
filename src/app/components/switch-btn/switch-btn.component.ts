import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'switch-btn',
  templateUrl: './switch-btn.component.html',
})
export class SwitchComponent  {
  @Input() on: boolean;
  @Input() className: string;
}
