import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { UxDesignComponent } from './ux-design.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [UxDesignComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    BrowserModule,
    CarouselModule

  ],
  exports: [UxDesignComponent]
})
export class UxDesignModule { }
