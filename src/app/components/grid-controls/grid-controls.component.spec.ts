import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IslandsService } from 'src/app/services/islands.service';

import { GridControlsComponent } from './grid-controls.component';

describe('GridControlsComponent', () => {
  let component: GridControlsComponent;
  let fixture: ComponentFixture<GridControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridControlsComponent ],
      imports: [
        NoopAnimationsModule,
        FormsModule,
        MatInputModule,
        MatButtonModule],
        providers: [IslandsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('createMatrix()', () => {
    it('should set a new value to the islandState BehaviorSubject', () => {
      expect(component['islandsService'].getIslandState().getValue()).toEqual({ rows:10, cols:10 });
      component.cols = 5;
      component.rows = 3
      component.createMatrix();
      expect(component['islandsService'].getIslandState().getValue()).toEqual({ rows:3, cols:5 });
    });
  });
});
