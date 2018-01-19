import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { DownloadServerComponent } from './download-server/download-server.component';
import { DownloadLibComponent } from './download-lib/download-lib.component';
import { InstallServerComponent } from './install-server/install-server.component';
import { InstallLibComponent } from './install-lib/install-lib.component';
import { RequiredComponent } from './required/required.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    DownloadServerComponent,
    DownloadLibComponent,
    InstallServerComponent,
    InstallLibComponent,
    RequiredComponent,
    IntroComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
