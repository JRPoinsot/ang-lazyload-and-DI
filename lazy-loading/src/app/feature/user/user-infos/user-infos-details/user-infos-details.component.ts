import { Component, OnInit } from '@angular/core';
import { DumbService } from 'src/app/core/services/dumb.service';

@Component({
  selector: 'app-user-infos-details',
  templateUrl: './user-infos-details.component.html',
  styleUrls: ['./user-infos-details.component.css']
})
export class UserInfosDetailsComponent implements OnInit {

  constructor(public service: DumbService) { }

  ngOnInit(): void {
  }

  public increment(): void {
    this.service.increment();
  }

}
