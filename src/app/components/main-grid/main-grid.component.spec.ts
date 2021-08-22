import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CellItem } from 'src/app/models/cell-item.model';
import { IslandsService } from 'src/app/services/islands.service';

import { MainGridComponent } from './main-grid.component';

describe('MainGridComponent', () => {
  let component: MainGridComponent;
  let fixture: ComponentFixture<MainGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGridComponent ],
      providers: [IslandsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit()', () => {
    it('should set rows and cols property in the component and call create matrix', () => {
      spyOn(component['islandsService'],'getIslandState').and.callThrough();
      spyOn(component,'createMatrix').and.callThrough();
      component.ngOnInit();
      expect(component['islandsService'].getIslandState).toHaveBeenCalled();
      expect(component.cols).toBe(10);
      expect(component.rows).toBe(10);
      expect(component.createMatrix).toHaveBeenCalled();
    });
  });

  describe('createMatrix()', () => {
    it('should reset variables and create matrix', () => {
      spyOn(component['islandsService'],'setSelectedCount').and.callThrough();
      spyOn(component['islandsService'],'setIslandCount').and.callThrough();
      component['islandsService'].setIslandState(10, 5);
      component.visited.add("x_y");
      component.createMatrix()
      expect(component.visited.size).toBe(0);
      expect(component['islandsService'].setSelectedCount).toHaveBeenCalled();
      expect(component['islandsService'].setIslandCount).toHaveBeenCalled();
      expect(component.matrix.length).toBe(10);
      expect(component.matrix[0].length).toBe(5);
      expect(component.matrix[0][0]).toEqual({x: 0, y: 0 ,selected: false});
      expect(component.matrix[9][4]).toEqual({x: 9, y: 4 ,selected: false});
    });
  });

  describe('onToggleState()', () => {
    it('should change the selected property to true', () => {
      spyOn(component['islandsService'],'setSelectedCount').and.callThrough();
      spyOn(component['islandsService'],'setIslandCount').and.callThrough();
      const mockCellItem: CellItem = {
        x: 1,
        y: 1,
        selected: false,
      }
      component.onToggleState(mockCellItem);
      expect(component['islandsService'].setIslandCount).toHaveBeenCalled();
      expect(component['islandsService'].setSelectedCount).toHaveBeenCalled();
      expect(mockCellItem.selected).toBeTruthy();
    });

    it('should change the selected property to false', () => {
      const mockCellItem: CellItem = {
        x: 1,
        y: 1,
        selected: true,
      }
      component.onToggleState(mockCellItem);
      expect(mockCellItem.selected).toBeFalsy();
    });
  });

  describe('getSelectedCells()', () => {
    it('should return the total selected cells', () => {
      component.cols = 10;
      component.rows = 10;
      component.createMatrix();
      component.matrix[0][0].selected = true;
      component.matrix[4][3].selected = true;
      expect(component.getSelectedCells()).toEqual(2);
    });
  });

  describe('findIslands()', () => {
    it('should return the total number of islands', () => {
      spyOn(component,'traverse').and.callThrough();
      component.cols = 10;
      component.rows = 10;
      component.createMatrix();
      component.matrix[0][0].selected = true;
      component.matrix[0][1].selected = true;
      component.matrix[1][1].selected = true;
      component.matrix[5][1].selected = true;
      component.matrix[5][2].selected = true;
      expect(component.findIslands()).toEqual(2);
      component.matrix[7][1].selected = true;
      expect(component.findIslands()).toEqual(3);
      expect(component.traverse).toHaveBeenCalled();
    });
  });

  describe('traverse()', () => {
    it('should return an array with the elements of the island', () => {
      spyOn(component,'traverse').and.callThrough();
      component.cols = 4;
      component.rows = 4;
      component.createMatrix();
      component.matrix[0][0].selected = true;
      component.matrix[0][1].selected = true;
      expect(component.traverse(0,0)).toEqual(["0_0","0_1"]);
      expect(component.visited.size).toEqual(2);
    });
  });

});
