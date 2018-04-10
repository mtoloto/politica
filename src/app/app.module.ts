import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ParlamentsPage, PopoverPage } from '../pages/parlaments/parlaments';
import { ParlamentListItemPage } from '../pages/parlaments/parlament-list-item/parlament-list-item';
import { SenatorListItem } from '../pages/parlaments/senator-list-item/senator-list-item';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ParlamentProvider } from '../providers/parlament/parlament';

 
import { ParlamentModalModule } from '../pages/parlaments/parlament-modal/parlament-modal.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ParlamentsPage,
    PopoverPage,
    ParlamentListItemPage,
    SenatorListItem
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ParlamentModalModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ParlamentsPage,
    PopoverPage,
    ParlamentListItemPage,
    SenatorListItem
  ],
  providers: [
    StatusBar,
    HttpClient,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ParlamentProvider
  ]
})
export class AppModule { }
