import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfosDetailsComponent } from './user-infos-details.component';

describe('UserInfosDetailsComponent', () => {
  let component: UserInfosDetailsComponent;
  let fixture: ComponentFixture<UserInfosDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfosDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
