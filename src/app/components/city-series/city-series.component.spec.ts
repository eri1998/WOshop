import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySeriesComponent } from './city-series.component';

describe('CitySeriesComponent', () => {
  let component: CitySeriesComponent;
  let fixture: ComponentFixture<CitySeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitySeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitySeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
