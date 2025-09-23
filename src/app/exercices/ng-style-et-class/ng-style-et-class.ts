import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ng-style-et-class',
  standalone:true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ng-style-et-class.html',
  styleUrl: './ng-style-et-class.css'
})
export class NgStyleEtClass {
Title:string="List friends (NgStyle et Class)";
TextBouton:string="Un Button";
Name:string="Steven Cigale";
Age:number=25;
Status:string="Offline";
getStatus():string{return this.Status;}
Bio:string="Steven Cigale is a French film producer, screenwriter, and director. He is best known for his work in the 2000s and 2010s.";
Image:string="https://randomuser.me/api/portraits/men/99.jpg";
Reputation:string="Ringard";
couleurOffline:string="red";
couleurOnline:string="green";
handleClick(){alert("Vous avez cliqué sur le bouton !");  }
ChangeStatus(){this.Status=this.Status==="Offline"?"Online":"Offline";}
}