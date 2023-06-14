import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopOnlineComponent } from './shop-online.component';

describe('ShopOnlineComponent', () => {
  let component: ShopOnlineComponent;
  let fixture: ComponentFixture<ShopOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopOnlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
