import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AtomsModule } from '../atoms/atoms.module';

import { MlclLogoComponent } from './mlcl_logo/mlcl-logo.component';
import { MlclNavComponent } from './mlcl_nav/mlcl-nav.component';
import { MlclSocialComponent } from './mlcl_social/mlcl-social.component';

const declarations = [
  MlclLogoComponent,
  MlclNavComponent,
  MlclSocialComponent,
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AtomsModule,
    RouterModule,
  ],
  exports: [...declarations],
  providers: [],
  declarations,
})
export class MoleculesModule {}
