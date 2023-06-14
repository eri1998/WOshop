import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsCollectionComponent } from './details-collection.component';

describe('DetailsCollectionComponent', () => {
  let component: DetailsCollectionComponent;
  let fixture: ComponentFixture<DetailsCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
