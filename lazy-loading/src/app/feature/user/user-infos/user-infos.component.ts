import { Component, OnInit } from '@angular/core';
import { DumbService } from 'src/app/core/services/dumb.service';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.css'],
  providers: [DumbService]
})
export class UserInfosComponent implements OnInit {

  constructor(public service: DumbService) { }

  ngOnInit(): void {
  }

  public increment(): void {
    this.service.increment();
  }

}
