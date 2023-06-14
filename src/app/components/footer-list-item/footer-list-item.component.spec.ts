import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterListItemComponent } from './footer-list-item.component';

describe('FooterListItemComponent', () => {
  let component: FooterListItemComponent;
  let fixture: ComponentFixture<FooterListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
