import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ControlsModule } from '../controls/controls.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ControlsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class ScheduleModule { }
