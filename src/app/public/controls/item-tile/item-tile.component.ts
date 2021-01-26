import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-item-tile',
  templateUrl: './item-tile.component.html',
  styleUrls: ['./item-tile.component.css']
})
export class ItemTileComponent implements OnInit {
  
  @Input() mealId
  @Input() name
  @Input() image
  @Input() topic
  
  imgBasePath = environment.imgBaseURL + 'meals/'

  constructor() { }

  ngOnInit() { }

}
  


