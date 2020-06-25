import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaProductoComponent } from './sistema-producto.component';

describe('SistemaProductoComponent', () => {
  let component: SistemaProductoComponent;
  let fixture: ComponentFixture<SistemaProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemaProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
