import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GridSettings } from '../models/grid-settings.model';

@Injectable({
  providedIn: 'root'
})
export class IslandsService {
  private islandState = new BehaviorSubject<GridSettings>({rows: 10, cols: 10});
  private islands: number = 0;
  private selected: number = 0;

  setIslandState(rows: number, cols: number){
    this.islandState.next({rows, cols});
  }

  getIslandState(){
    return this.islandState;
  }

  getIslandCount(){
    return this.islands;
  }

  setIslandCount(count: number){
    this.islands = count;
  }

  getSelectedCount(){
    return this.selected;
  }

  setSelectedCount(count: number){
    this.selected = count;
  }
}
