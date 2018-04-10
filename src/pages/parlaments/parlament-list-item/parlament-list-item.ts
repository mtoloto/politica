import { Component, Input, OnInit } from '@angular/core';
import { Parlament } from './parlament.model';
import { HttpClient } from "@angular/common/http";
import { ModalController } from 'ionic-angular';
import { ParlamentModalComponent } from '../parlament-modal/parlament-modal';
import { ParlamentModal } from '../parlament-modal/parlament-modal.model';

/**
 * Generated class for the ParlamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'parlament-list-item',
  templateUrl: 'parlament-list-item.html',
})
export class ParlamentListItemPage implements OnInit {
  @Input() parlament: Parlament;

  constructor(private http: HttpClient, public modalCtrl: ModalController) { }

  ngOnInit() {
    if (this.parlament != null) {
      this.http.get(this.parlament.uriPartido).subscribe((res: any) => {
        this.parlament.partido = res.dados;
      });
    }
  }

  openModalWithParams() {
    let parlamentModal = new ParlamentModal();

    parlamentModal.email = "teste@asd.com";
    parlamentModal.nome = this.parlament.nome;
    parlamentModal.foto = this.parlament.urlFoto;
    parlamentModal.telefone = "(19) 99412 9292";
    parlamentModal.tipo = "Deputado";
    parlamentModal.uf = this.parlament.siglaUf;
    parlamentModal.logoPartido = this.parlament.partido.urlLogo;
    
    let myModal = this.modalCtrl.create(ParlamentModalComponent, { 'parlament': parlamentModal });
    myModal.present();
  }

}
