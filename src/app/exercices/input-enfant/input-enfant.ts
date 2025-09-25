import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-enfant',
  imports: [],
  templateUrl: './input-enfant.html',
  styleUrl: './input-enfant.css'
})
export class InputEnfant {
@Input() nomDuPote: string = '';
@Output() changementStatut = new EventEmitter<void>();
oneFriendId:number=99;
  oneFriendName:string="Steven Cigale";
  oneFriendAge:number=25;
  oneFriendStatus:string="Offline";
  oneFriendBio:string="Steven Cigale is a French film producer, screenwriter, and director. He is best known for his work in the 2000s and 2010s.";
  oneFriendImgUrl:string="https://picsum.photos/seed/picsum/150/150";
  getOneFriendStatus():string{return this.oneFriendStatus;}
  // changerStatut(){this.oneFriendStatus = this.oneFriendStatus === "Offline" ? "Online" : "Offline";}
  changerStatut(){this.changementStatut.emit();}
}
