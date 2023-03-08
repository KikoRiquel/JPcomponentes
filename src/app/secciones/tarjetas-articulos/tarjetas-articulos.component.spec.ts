import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasArticulosComponent } from './tarjetas-articulos.component';

describe('TarjetasArticulosComponent', () => {
  let component: TarjetasArticulosComponent;
  let fixture: ComponentFixture<TarjetasArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetasArticulosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetasArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
