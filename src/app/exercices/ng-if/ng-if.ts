import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-if',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-if.html',
  styleUrls: ['./ng-if.css']
})
export class NgIf {
Title:string="List friends (NgIf)";
TextBouton:string="Ajouter un ami";
Name:string="Steven Cigale";
Age:number=25;
Status:string="Offline";
Bio:string="Steven Cigale is a French film producer, screenwriter, and director. He is best known for his work in the 2000s and 2010s.";
Image:string="https://randomuser.me/api/portraits/men/99.jpg";
Reputation:string="Ringard";
saisie:string="";
listFriendsCreationStatus:string="Aucun ami";
statutBouton:boolean=false;
ngif_boolean:boolean=true;

// constructor(){ setTimeout(() => {this.statutBouton=!this.statutBouton;}, 5000); }

getStatus():string{return this.Status;}
handleClick(){this.listFriendsCreationStatus = this.listFriendsCreationStatus == "Aucun ami" ? "Votre ami a été ajouté !" : "Aucun ami";
  this.ngif_boolean = !this.ngif_boolean;
 }
handleInput(event: Event){this.saisie = (event.target as HTMLInputElement).value;}

}