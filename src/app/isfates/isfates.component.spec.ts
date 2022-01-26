import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsfatesComponent } from './isfates.component';

describe('IsfatesComponent', () => {
  let component: IsfatesComponent;
  let fixture: ComponentFixture<IsfatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsfatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsfatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
