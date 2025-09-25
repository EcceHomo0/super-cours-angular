import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputEnfant } from '../input-enfant/input-enfant';
@Component({
  selector: 'app-list-rendering',
  imports: [InputEnfant,NgFor,FormsModule],
  templateUrl: './input-parent.html',
  styleUrl: './input-parent.css'
})
export class ListRendering {

  inputNameFriend:string=''

   userProfiles  = [
    {
      id: 1,
      firstName: 'Jean',
      lastName: 'Dupont',
      email: 'jean.dupont@example.com',
      isActive: true,
      role: 'administrateur'
    },
    // {
    //   id: 2,
    //   firstName: 'Marie',
    //   lastName: 'Martin',
    //   email: 'marie.martin@example.com',
    //   isActive: false,
    //   role: 'utilisateur'
    // },
    // {
    //   id: 3,
    //   firstName: 'Pierre',
    //   lastName: 'Durand',
    //   email: 'pierre.durand@example.com',
    //   isActive: true,
    //   role: 'modÃ©rateur'
    // },
    // {
    //   id: 4,
    //   firstName: 'Sophie',
    //   lastName: 'Lefebvre',
    //   email: 'sophie.lefebvre@example.com',
    //   isActive: true,
    //   role: 'utilisateur'
    // }
  ];

  addAFriend(){
    this.userProfiles.push(
      {
      id:Math.random(),
      firstName:this.inputNameFriend,
      lastName:'Dupont',
      email: 'jean.dupont@example.com',
      isActive: true,
      role: 'administrateur'
    }
  )
  }
changerStatutDuPote() {this.userProfiles[0].isActive = this.userProfiles[0].isActive === true ? false : true;}
}
