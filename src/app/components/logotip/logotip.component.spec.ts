import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogotipComponent } from './logotip.component';

describe('LogotipComponent', () => {
  let component: LogotipComponent;
  let fixture: ComponentFixture<LogotipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogotipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogotipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
