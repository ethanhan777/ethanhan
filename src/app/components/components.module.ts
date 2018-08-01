import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { ServicesModule } from '../services/services.module';

import { profileSelector, ProfileComponent } from './profile/profile.component';
import { skillsSelector, SkillsComponent } from './skills/skills.component';
import { projectsSelector, ProjectsComponent } from './projects/projects.component';
import { contactSelector, ContactComponent } from './contact/contact.component';

export const componentSelectors = [
  profileSelector,
  skillsSelector,
  projectsSelector,
  contactSelector
];
const declarations = [
  ProfileComponent,
  SkillsComponent,
  ProjectsComponent,
  ContactComponent
];

@NgModule({
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    ServicesModule,
  ],
  exports: [...declarations],
  entryComponents: [...declarations],
  declarations,
  providers: [
    { provide: profileSelector, useValue: ProfileComponent },
    { provide: skillsSelector, useValue: SkillsComponent },
    { provide: projectsSelector, useValue: ProjectsComponent },
    { provide: contactSelector, useValue: ContactComponent }
  ],
})
export class ComponentsModule {}
