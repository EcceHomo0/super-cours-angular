import { Component } from '@angular/core';
import { Child } from '../child/child';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common'; 

@Component({
  selector: 'app-parent',
  imports: [Child, NgIf, FormsModule],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {
  parentMessage: string = 'Ici le parent balance des infos intra ENFANT';
  counterParent: number = 0;
  childNotification: string | null = null;


  increaseCounter() {
    this.counterParent++;
  }

  decreaseCounter() {
    if (this.counterParent > 0) {
      this.counterParent--;
    }
  }

  //! Reaction dans le parent à la notification de l'enfant (l'event custom)
  handleNotification(message: string) {
    console.log(message);
    this.childNotification = message;
  }
}
