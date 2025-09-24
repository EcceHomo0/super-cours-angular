// import { Component } from '@angular/core';
// import { NgForClass } from '../ng-for/ng-for';
// import { NgFor } from '@angular/common';
// import { Input } from '@angular/core';

// @Component({
//   selector: 'app-ngfor-enfant',
//   standalone: true,
//   imports: [NgForClass, NgFor],
//   templateUrl: './ngfor-enfant.html',
//   styleUrls: ['./ngfor-enfant.css'],
// })
// export class NgforEnfant {
//   @Input() lesAmis?: any[];
//   @Input() nouvelAmi: any;
// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './ngfor-enfant.html',
  styleUrls: ['./ngfor-enfant.css']
})
export class NgforEnfant {
  oneFriendId:number=99;
  oneFriendName:string="Steven Cigale";
  oneFriendAge:number=25;
  oneFriendStatus:string="Offline";
  oneFriendBio:string="Steven Cigale is a French film producer, screenwriter, and director. He is best known for his work in the 2000s and 2010s.";
  oneFriendImgUrl:string="https://picsum.photos/seed/picsum/150/150";
  getOneFriendStatus():string{
    return this.oneFriendStatus;
  }
}