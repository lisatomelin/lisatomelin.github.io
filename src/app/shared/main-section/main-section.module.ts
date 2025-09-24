import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSectionComponent } from './main-section.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [MainSectionComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatDividerModule
  ],
  exports: [MainSectionComponent]
})
export class MainSectionModule { }
