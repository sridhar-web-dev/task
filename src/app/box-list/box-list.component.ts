// box-list.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.css']
})
export class BoxListComponent {
  boxes: any[] = [];
  newBoxTitle: string = '';  // Variable to store the title entered by the user

  addBox() {
    if (this.newBoxTitle.trim() === '') {
      alert('Please enter a title for the box.');
      return;
    }

    this.boxes.push({ title: this.newBoxTitle });
    this.newBoxTitle = '';  // Clear the input after adding the box
  }

  deleteBox(index: number) {
    this.boxes.splice(index, 1);
    // Reassign numbering after deletion
    this.boxes = this.boxes.map((box, idx) => ({ ...box, title: `Box ${idx + 1}` }));
  }
}
