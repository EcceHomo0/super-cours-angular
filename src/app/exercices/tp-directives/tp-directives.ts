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
  nbre_clics: number[] = [];

  gestionClick()
  {
    this.detailsVisible = !this.detailsVisible;
    this.nbre_clics.push(this.nbre_clics.length + 1);
  } 

}
