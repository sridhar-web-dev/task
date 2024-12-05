// box.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  @Input() index: number = 0;
  @Input() box: any = {};
  @Output() delete: EventEmitter<void> = new EventEmitter();

  deleteBox() {
    this.delete.emit();
  }
}
