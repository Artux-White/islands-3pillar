import { Component } from '@angular/core';
import { IslandsService } from 'src/app/services/islands.service';

@Component({
  selector: 'app-grid-controls',
  templateUrl: './grid-controls.component.html',
  styleUrls: ['./grid-controls.component.scss']
})
export class GridControlsComponent{
  cols = 10;
  rows = 10;
  constructor(private islandsService: IslandsService) { }

  createMatrix() {
    this.islandsService.setIslandState(this.rows, this.cols);
  }

}
