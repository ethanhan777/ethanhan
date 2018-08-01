import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtomsModule } from '../atoms/atoms.module';

const declarations = [];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AtomsModule,
  ],
  exports: [...declarations],
  providers: [],
  declarations,
})
export class MoleculesModule {}
