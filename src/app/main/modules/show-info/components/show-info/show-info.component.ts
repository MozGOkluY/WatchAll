import { Component, OnInit, Input } from '@angular/core';
import { ShowModel } from 'src/app/shared/models/show.model';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.scss']
})
export class ShowInfoComponent implements OnInit {

  @Input() currentShow: ShowModel;

  constructor() { }

  ngOnInit() {

  }

}
