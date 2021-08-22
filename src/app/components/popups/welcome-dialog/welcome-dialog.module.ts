import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeDialogComponent } from './welcome-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [WelcomeDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports:[WelcomeDialogComponent]
})
export class WelcomeDialogModule { }
