import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MiaSurveyPanelModule } from 'projects/doroteati/mia-survey-panel/src/public-api';
import { MIA_AUTH_PROVIDER } from '@doroteati/mia-auth';
import { MIA_CORE_PROVIDER } from '@doroteati/mia-core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MiaSurveyPanelModule,
  ],
  providers: [
    {
      provide: MIA_AUTH_PROVIDER,
      useValue: {
        baseUrl: 'https://doroteati-interno.uc.r.appspot.com/',
        //baseUrl: 'http://0.0.0.0:8080/'
      },
    },
    {
      provide: MIA_CORE_PROVIDER,
      useValue: {
        baseUrl: 'https://doroteati-interno.uc.r.appspot.com/',
        //baseUrl: 'http://0.0.0.0:8080/'
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
