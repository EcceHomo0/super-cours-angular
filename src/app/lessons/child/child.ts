import { Component,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
  @Output() notify = new EventEmitter<string>();
  @Input() message: string='';
  @Input() counter: number=0;

  notifyParent() { this.notify.emit(`Counter is now from enfant: ${this.counter}`);}

}
