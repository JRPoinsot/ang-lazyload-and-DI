import { Component, OnInit } from '@angular/core';
import { DumbService } from 'src/app/core/services/dumb.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public service: DumbService) { }

  ngOnInit(): void {
  }

  public increment(): void {
    this.service.increment();
  }

}
