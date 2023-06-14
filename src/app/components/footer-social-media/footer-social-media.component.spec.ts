import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterSocialMediaComponent } from './footer-social-media.component';

describe('FooterSocialMediaComponent', () => {
  let component: FooterSocialMediaComponent;
  let fixture: ComponentFixture<FooterSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSocialMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
