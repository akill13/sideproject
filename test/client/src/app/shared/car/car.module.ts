import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarParentComponent } from './component/car-parent/car-parent.component';

@NgModule({
  declarations: [CarParentComponent],
  exports: [CarParentComponent],
  imports: [
    CommonModule
  ]
})
export class CarModule { }
