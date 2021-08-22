import { Component } from '@angular/core';
import { IslandsService } from 'src/app/services/islands.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {

  constructor(public islandsService: IslandsService) { }

}
