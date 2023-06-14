import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCollectionComponent } from './type-collection.component';

describe('TypeCollectionComponent', () => {
  let component: TypeCollectionComponent;
  let fixture: ComponentFixture<TypeCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
