import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import {
  AppComponent,
  appComponentSelector
} from './app.component';
import {
  componentSelectors,
  ComponentsModule,
} from './components/components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { MoleculesModule } from './molecules/molecules.module';
import { AtomsModule } from './atoms/atoms.module';
import { ServicesModule } from './services/services.module';

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ThoughtsComponent } from './components/thoughts/thoughts.component';

export const entryComponentSelectors = [...componentSelectors];

const appRoutes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'thoughts', component: ThoughtsComponent },
  { path: '**', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FontAwesomeModule,
    ScrollToModule.forRoot(),
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
