import { Component } from '@angular/core';
import { ParlamentModal } from './parlament-modal.model';
import { NavParams, ViewController } from 'ionic-angular';
/*  import { HttpClient } from "@angular/common/http";*/

/**
 * Generated class for the ParlamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'parlament-modal',
  templateUrl: 'parlament-modal.html',
})
export class ParlamentModalComponent {
  parlamentModal: ParlamentModal;

  constructor(
    public viewCtrl: ViewController,
    params: NavParams) {
    this.parlamentModal = params.get("parlament");
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
