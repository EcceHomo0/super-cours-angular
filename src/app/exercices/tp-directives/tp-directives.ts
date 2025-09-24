import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tp-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tp-directives.html',
  styleUrls: ['./tp-directives.css']
})

export class TpDirectives 
{
  detailsVisible: boolean = false;
  clics: number = 0;
  nbre_clics: number[] = [];

  gestionClick()
  {
    this.detailsVisible = !this.detailsVisible;
    this.clics++;
    this.nbre_clics.push(this.clics);
    console.log(this.clics,this.nbre_clics);
  } 

}
