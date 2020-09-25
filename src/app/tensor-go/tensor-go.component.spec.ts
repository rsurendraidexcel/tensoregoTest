import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TensorGoComponent } from './tensor-go.component';

describe('TensorGoComponent', () => {
  let component: TensorGoComponent;
  let fixture: ComponentFixture<TensorGoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TensorGoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TensorGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
