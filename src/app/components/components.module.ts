import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { ServicesModule } from '../services/services.module';

import { headerSelector, HeaderComponent } from './header/header.component';
import { projectsSelector, ProjectsComponent } from './projects/projects.component';
import { aboutSelector, AboutComponent } from './about/about.component';
import { thoughtsSelector, ThoughtsComponent } from './thoughts/thoughts.component';

export const componentSelectors = [
  headerSelector,
  projectsSelector,
  aboutSelector,
  thoughtsSelector
];
const declarations = [
  HeaderComponent,
  ProjectsComponent,
  ThoughtsComponent,
  AboutComponent
];

@NgModule({
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    ServicesModule,
    RouterModule,
  ],
  exports: [...declarations],
  entryComponents: [...declarations],
  declarations,
  providers: [
    { provide: headerSelector, useValue: HeaderComponent },
    { provide: aboutSelector, useValue: AboutComponent },
    { provide: projectsSelector, useValue: ProjectsComponent },
    { provide: thoughtsSelector, useValue: ThoughtsComponent }
  ],
})
export class ComponentsModule {}
