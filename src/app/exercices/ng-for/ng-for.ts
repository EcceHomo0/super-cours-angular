import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgforEnfant } from '../ngfor-enfant/ngfor-enfant';


@Component({
  selector: 'app-ng-for',
  imports: [NgFor,FormsModule, NgforEnfant],
  templateUrl: './ng-for.html',
  styleUrl: './ng-for.css'
})
export class NgForClass {

inputNouveauNom:string = '';    

lesAmis = [
    {
        id: 'lasticot',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    // {
    //     id: 'lasticot2',
    //     name: 'COCO L ASTICOT',
    //     phone: '01234 5678 991',
    //     email: 'coco@lasticot.com',
    //     premium: true
    // },
    // {
    //     id: 'kimonoSurUnFrigo',
    //     name: "Steven Seagal",
    //     phone: '+338765477',
    //     email: 'steven@seagal.com',
    //     premium: true
    // },
    // {
    //     id: 'yoyoyo',
    //     name: "JAROD",
    //     phone: '+338765477',
    //     email: 'jAROD@seagal.com',
    //     premium: true
    // }
];

ajouterUnAmi(){
    this.lesAmis.push({
        id: Math.random().toString(36).substr(2, 9),
        name: this.inputNouveauNom,
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true })
}
}