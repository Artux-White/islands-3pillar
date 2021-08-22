import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CellItem } from 'src/app/models/cell-item.model';
import { IslandsService } from 'src/app/services/islands.service';

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.scss']
})
export class MainGridComponent implements OnInit, OnDestroy {
  cols = 0;
  rows = 0;
  matrix: CellItem[][] = [];
  visited: Set<string> = new Set();
  serviceSubs: Subscription = new Subscription;
  constructor(private islandsService: IslandsService) {
  }

  /**
   * New dimensions are defined from the grid-controls component.
   * We subscribe to the service to get the initial grid values (10 x 10),
   * then we call the createMatrix() method.
   **/
  ngOnInit(): void {
    this.serviceSubs = this.islandsService.getIslandState().subscribe(res => {
      this.cols = res.cols;
      this.rows = res.rows;
      this.createMatrix();
    });
  }

  /**
   * Perform cleanup
   **/
  ngOnDestroy(): void {
    this.serviceSubs.unsubscribe()
  }

  /**
   * Create the matrix using the selected rows and columns from the service.
   **/
  createMatrix(): void {
    // clear variables
    this.visited.clear();
    this.islandsService.setSelectedCount(0);
    this.islandsService.setIslandCount(0);
    this.matrix = [];
    // Initialize matrix
    for (let i = 0; i < this.rows; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < this.cols; j++) {
        const cellItem: CellItem = {
          x: i,
          y: j,
          selected: false,
        };
        this.matrix[i][j] = cellItem;
      }
    }
  }

  /**
   * Called when you click on a cell in the grid.
   * Everytime a new cell is selected, we sum the cells and calculate the islands total.
   * These values are saved to the service for easier access from the summary component.
   **/
  onToggleState(c: CellItem): void {
    c.selected = !c.selected;
    this.islandsService.setSelectedCount(this.getSelectedCells());
    this.islandsService.setIslandCount(this.findIslands());
  }

  /**
   * Simple For-Loop that returns the number of selected cells.
   * @returns selected cells count.
   **/
  getSelectedCells(): number {
    let counter = 0;
    for (const row of this.matrix) {
      for (const cell of row) {
        if (cell.selected) { counter++ }
      }
    }
    return counter;
  }

  /**
   * Calculates how many islands exists in the matrix.
   * @returns islands count.
   **/
  findIslands(): number{
    const islands = [];
    this.visited = new Set();
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        if (this.visited.has(i + '_' + j))
          continue

        let island = this.traverse(i, j);
        if (island) {
          islands.push(island);
        }
      }
    }
    return islands.length;
  }

  /**
   * Traverse matrix recursively to find adjacent selected cells.
   **/
  traverse(x: number, y: number, current: string[] = []): string[] | undefined {
    // prevent checking out-of-range cells
    if (x < 0 || y < 0 || x > this.matrix.length - 1 || y > this.matrix[0].length - 1) {
      return;
    }
    // prevent checking unselected or already checked cells.
    if (this.matrix[x][y].selected !== true || this.visited.has(x + '_' + y)) {
      return;
    }
    current.push(x + '_' + y);
    this.visited.add(x + '_' + y) // save to visited to prevent checking it twice
    this.traverse(x, y + 1, current); // check above cell
    this.traverse(x, y - 1, current); // check below cell
    this.traverse(x - 1, y, current); // check left cell
    this.traverse(x + 1, y, current); // check right cell
    return current;
  }

}
