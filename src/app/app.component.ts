import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WelcomeDialogComponent } from './components/popups/welcome-dialog/welcome-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private dialog : MatDialog){}

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog() {
    this.dialog.open(WelcomeDialogComponent);
  }
}
