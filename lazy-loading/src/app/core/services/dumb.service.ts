import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DumbService implements OnDestroy {

  private countSubject = new BehaviorSubject<number>(0);
  public count$ = this.countSubject.asObservable();
  public serviceid = Math.round(Math.random() * 10000);

  constructor() {
    console.log('Service Created ', this.serviceid);
  }

  ngOnDestroy(): void {
    console.log('Service Destroyed ', this.serviceid);
  }

  public increment(): void {
    this.countSubject.next(this.countSubject.value + 1);
  }
}


