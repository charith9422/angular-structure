import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InitialService } from '../app/shared/initial.service';
import { ChillersComponent } from './chillers/chillers.component';
import { ConfigurationService } from './shared/configuration.service';


@NgModule({
  declarations: [
    AppComponent,
    ChillersComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    InitialService,
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigLoader,
      deps: [InitialService],
      multi: true
    },
    ConfigurationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function ConfigLoader(configService: InitialService) {
  return () => configService.load('../assets/config.json');
}