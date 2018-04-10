import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParlamentsPage } from '../parlaments/parlaments';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slides = [
    {
      image: "assets/imgs/background1.jpg",
      credit: 'Foto - Lula Marques / AGPT'
    },
    {
      image: "assets/imgs/background2.jpg",
      credit: 'Foto - Ana Luiza Souza'
    },
    {
      image: "assets/imgs/background3.jpg",
      credit: 'Foto - Lula Marques / AGPT'
    }
  ];
  constructor(public navCtrl: NavController) { 
  }


  goToParlaments(type){
    this.navCtrl.push(ParlamentsPage);
  }

}
