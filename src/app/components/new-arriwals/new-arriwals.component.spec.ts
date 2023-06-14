import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArriwalsComponent } from './new-arriwals.component';

describe('NewArriwalsComponent', () => {
  let component: NewArriwalsComponent;
  let fixture: ComponentFixture<NewArriwalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewArriwalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewArriwalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
