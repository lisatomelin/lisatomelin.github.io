import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { MainSectionModule } from 'src/app/shared/main-section/main-section.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { ProjectsModule } from 'src/app/shared/projects/projects.module';

import { UxDesignModule } from 'src/app/shared/ux-design/ux-design.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeaderModule,
    MainSectionModule,
    FooterModule,
    ProjectsModule,
    UxDesignModule,

  ],
  exports: [HomeComponent]
})
export class HomeModule { }
