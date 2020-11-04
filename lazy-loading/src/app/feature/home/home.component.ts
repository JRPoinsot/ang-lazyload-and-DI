import { Component, OnInit } from '@angular/core';
import { DumbService } from 'src/app/core/services/dumb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public service: DumbService) { }

  ngOnInit(): void {
  }

  public increment(): void {
    this.service.increment();
  }

}
