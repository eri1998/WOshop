import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderHolderComponent } from './header-holder.component';

describe('HeaderHolderComponent', () => {
  let component: HeaderHolderComponent;
  let fixture: ComponentFixture<HeaderHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
