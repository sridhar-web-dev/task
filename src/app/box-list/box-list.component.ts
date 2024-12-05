// box-list.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.css']
})
export class BoxListComponent {
  boxes: any[] = [];

  addBox() {
    this.boxes.push({ title: `Box ${this.boxes.length + 1}` });
  }

  deleteBox(index: number) {
    this.boxes.splice(index, 1);
    // Reassign numbering after deletion
    this.boxes = this.boxes.map((box, idx) => ({ ...box, title: `Box ${idx + 1}` }));
  }
}
