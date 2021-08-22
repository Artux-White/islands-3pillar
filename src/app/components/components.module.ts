import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridControlsModule } from './grid-controls/grid-controls.module';
import { MainGridModule } from './main-grid/main-grid.module';
import { SummaryModule } from './summary/summary.module';
import { WelcomeDialogModule } from './popups/welcome-dialog/welcome-dialog.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GridControlsModule,
    MainGridModule,
    SummaryModule,
    WelcomeDialogModule,
  ],
  exports: [
    GridControlsModule,
    MainGridModule,
    SummaryModule,
    WelcomeDialogModule,
  ]
})
export class IslandsComponentsModule { }
