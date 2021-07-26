import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ControlsModule } from '../controls/controls.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ControlsModule,
    FormsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class ScheduleModule { }
