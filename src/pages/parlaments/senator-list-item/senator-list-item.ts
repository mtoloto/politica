import { Component, Input, OnInit } from '@angular/core';
import { Senator } from './senator.model';
/*  import { HttpClient } from "@angular/common/http";*/

/**
 * Generated class for the ParlamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'senator-list-item',
  templateUrl: 'senator-list-item.html',
})
export class SenatorListItem implements OnInit {
  @Input() senator: Senator;

  constructor(/* private http: HttpClient */) { }

  ngOnInit() {
    /*  if (this.parlament != null) {
       this.http.get(this.parlament.uriPartido).subscribe((res: any) => {
         this.parlament.partido = res.dados;
       }); 
  }*/
  }
}
