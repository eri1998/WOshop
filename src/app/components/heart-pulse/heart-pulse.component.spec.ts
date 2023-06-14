import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeartPulseComponent } from './heart-pulse.component';

describe('HeartPulseComponent', () => {
  let component: HeartPulseComponent;
  let fixture: ComponentFixture<HeartPulseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeartPulseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeartPulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
