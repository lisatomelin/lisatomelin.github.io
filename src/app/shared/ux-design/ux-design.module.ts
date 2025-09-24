import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { UxDesignComponent } from './ux-design.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [UxDesignComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule

  ],
  exports: [UxDesignComponent]
})
export class UxDesignModule { }
