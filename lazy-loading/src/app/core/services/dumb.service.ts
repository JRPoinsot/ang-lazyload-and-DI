import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DumbService implements OnDestroy {

  private countSubject = new BehaviorSubject<number>(0);
  public count$ = this.countSubject.asObservable();

  constructor() {
    console.log('Service Created !');
  }

  ngOnDestroy(): void {
    console.log('Service Destroyed !')
  }

  public increment(): void {
    this.countSubject.next(this.countSubject.value + 1);
  }
}
