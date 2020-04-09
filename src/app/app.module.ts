import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalPageDetailsPageModule } from './pages/modal-page-details/modal-page-details.module';
import { ChangePasswordPageModule } from './pages/change-password/change-password.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faAmazon, faFlickr, faVimeoV, faSteamSymbol, faSlack, faAdobe } from '@fortawesome/free-brands-svg-icons';
import { faAtlassian, faCcPaypal, faEbay, faWaze, faAws, faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faCcAmex, faCcVisa, faSpotify, faNeos, faDocker, faFlipboard } from '@fortawesome/free-brands-svg-icons';
import { faEvernote, faJira, faLine, faMagento, faMediumM,faPatreon } from '@fortawesome/free-brands-svg-icons';
import { faQuora, faStackOverflow, faTelegramPlane, faTripadvisor, faUber, faVine } from '@fortawesome/free-brands-svg-icons';
import { faVk, faWix, faYammer, faWordpress } from '@fortawesome/free-brands-svg-icons';

library.add(faAmazon);
library.add(faAtlassian);
library.add(faCcPaypal);
library.add(faEbay);
library.add(faWaze);
library.add(faAws);
library.add(faCcMastercard);    
library.add(faCcAmex);
library.add(faCcVisa);
library.add(faSpotify);
library.add(faNeos);
library.add(faDocker);
library.add(faFlipboard);
library.add(faEvernote);
library.add(faJira);
library.add(faLine);
library.add(faMagento);
library.add(faMediumM);
library.add(faPatreon);
library.add(faQuora);
library.add(faStackOverflow);
library.add(faTelegramPlane);
library.add(faTripadvisor);
library.add(faUber);
library.add(faVine);
library.add(faVk);
library.add(faWix);
library.add(faYammer);
library.add(faWordpress);
library.add(faFlickr);
library.add(faVimeoV);
library.add(faSteamSymbol);
library.add(faSlack);
library.add(faAdobe);

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    ModalPageDetailsPageModule,
    ChangePasswordPageModule,
    FontAwesomeModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
