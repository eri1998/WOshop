import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NameCollectionComponent } from './name-collection.component';

describe('NameCollectionComponent', () => {
  let component: NameCollectionComponent;
  let fixture: ComponentFixture<NameCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
