import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { ParlamentProvider } from "../../providers/parlament/parlament";

/**
 * Generated class for the ParlamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-parlaments',
  templateUrl: 'parlaments.html',
})
export class ParlamentsPage {

  parlaments: any;
  senators: any;

  page = 1;
  pet: string = "Deputados Federais";
  isAndroid: boolean = false;
  senatorsLoaded: boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private parlamentProvider: ParlamentProvider,
    public popoverCtrl: PopoverController,
    platform: Platform) {

    this.isAndroid = platform.is('android');

    parlamentProvider.getDeputies(this.page).then((res: any) => {
      this.page = this.page + 1;
      this.parlaments = res.dados; 
    }, (err) => {
    });
  }

  loadSenators() {
    if (!this.senatorsLoaded)
      this.parlamentProvider.getSenators().then((res: any) => {
        this.senators = res.ListaParlamentarEmExercicio.Parlamentares.Parlamentar;
        this.senatorsLoaded = true;
      }, (err) => {
      });
  }  

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  doInfinite(infiniteScroll) {
    this.parlamentProvider.getDeputies(this.page).then((res: any) => {
      this.page = this.page + 1;
      this.parlaments = this.parlaments.concat(res.dados);
      infiniteScroll.complete();
    }, (err) => {
    });
  }

  doInfiniteSenator(infiniteScroll) {
    this.parlamentProvider.getSenators().then((res: any) => {
      //this.senators = this.parlaments.concat(res.dados);
      infiniteScroll.complete();
    }, (err) => {
    });
  }

}

@Component({
  template: `
    <ion-list>
      <ion-list-header>Ionic</ion-list-header>
      <button ion-item (click)="close()">Deputados</button>
      <button ion-item (click)="close()">Senadores</button>
      <button ion-item (click)="close()">Todos</button>       
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController) { }

  close() {
    this.viewCtrl.dismiss();
  }
}
