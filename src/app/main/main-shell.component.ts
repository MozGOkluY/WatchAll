import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main-shell',
  templateUrl: './main-shell.component.html',
  styleUrls: ['./main-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
