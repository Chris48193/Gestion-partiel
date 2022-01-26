import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartielsComponent } from './partiels.component';

describe('PartielsComponent', () => {
  let component: PartielsComponent;
  let fixture: ComponentFixture<PartielsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartielsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
