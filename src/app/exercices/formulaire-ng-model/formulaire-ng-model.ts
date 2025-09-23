import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulaire-ng-model',
  imports: [FormsModule],
  templateUrl: './formulaire-ng-model.html',
  styleUrl: './formulaire-ng-model.css'
})
export class FormulaireNgModel {
Title:string="List friends (Formulaire NgModel)";
TextBouton:string="Un Button";
Name:string="Steven Cigale";
Age:number=25;
Status:string="Offline";
getStatus():string{return this.Status;}
Bio:string="Steven Cigale is a French film producer, screenwriter, and director. He is best known for his work in the 2000s and 2010s.";
Image:string="https://randomuser.me/api/portraits/men/99.jpg";
Reputation:string="Ringard";
handleClick(){alert("Vous avez cliqué sur le bouton !");  }
}