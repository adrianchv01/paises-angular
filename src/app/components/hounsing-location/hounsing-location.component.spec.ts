import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HounsingLocationComponent } from './hounsing-location.component';

describe('HounsingLocationComponent', () => {
  let component: HounsingLocationComponent;
  let fixture: ComponentFixture<HounsingLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HounsingLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HounsingLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
