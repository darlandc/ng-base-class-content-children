import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toggle-btn',
  template: '<switch-btn [on]="on" (click)="onClick()"></switch-btn>',
})
export class ToggleButtonComponent  {
  @Input() on: boolean;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();
  onClick(): void {
    this.on = !this.on;
    this.toggle.emit(this.on);
  }
}
