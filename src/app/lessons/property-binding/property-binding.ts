import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css'
})
export class PropertyBinding {
Title:string="List friends (Property Binding)";
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