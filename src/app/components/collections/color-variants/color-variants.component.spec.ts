import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorVariantsComponent } from './color-variants.component';

describe('ColorVariantsComponent', () => {
  let component: ColorVariantsComponent;
  let fixture: ComponentFixture<ColorVariantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorVariantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorVariantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
