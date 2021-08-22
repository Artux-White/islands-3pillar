import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridControlsComponent } from './grid-controls.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    GridControlsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    GridControlsComponent
  ]
})
export class GridControlsModule { }
