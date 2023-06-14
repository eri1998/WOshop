import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SizeVariantsComponent } from './size-variants.component';

describe('SizeVariantsComponent', () => {
  let component: SizeVariantsComponent;
  let fixture: ComponentFixture<SizeVariantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeVariantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizeVariantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
