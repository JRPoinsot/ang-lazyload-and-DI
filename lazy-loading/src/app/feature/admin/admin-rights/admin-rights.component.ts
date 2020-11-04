import { Component, OnInit } from '@angular/core';
import { DumbService } from 'src/app/core/services/dumb.service';

@Component({
  selector: 'app-admin-rights',
  templateUrl: './admin-rights.component.html',
  styleUrls: ['./admin-rights.component.css']
})
export class AdminRightsComponent implements OnInit {

  constructor(public service: DumbService) { }

  ngOnInit(): void {
  }

  public increment(): void {
    this.service.increment();
  }

}
