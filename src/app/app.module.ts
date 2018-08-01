import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  AppComponent,
  appComponentSelector
} from './app.component';
import {
  componentSelectors,
  ComponentsModule,
} from './components/components.module';
import { MoleculesModule } from './molecules/molecules.module';
import { AtomsModule } from './atoms/atoms.module';
import { ServicesModule } from './services/services.module';

export const entryComponentSelectors = [...componentSelectors];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ServicesModule,
    AtomsModule,
    MoleculesModule,
    ComponentsModule,
  ],
  providers: [
    { provide: appComponentSelector, useValue: AppComponent },
  ],
  // entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  // ngDoBootstrap() {}
}
