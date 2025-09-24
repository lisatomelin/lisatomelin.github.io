import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    MatExpansionModule

  ],
  exports: [ProjectsComponent]

})
export class ProjectsModule { }
