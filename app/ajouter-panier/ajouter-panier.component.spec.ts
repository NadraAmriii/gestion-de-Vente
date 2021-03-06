import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPanierComponent } from './ajouter-panier.component';

describe('AjouterPanierComponent', () => {
  let component: AjouterPanierComponent;
  let fixture: ComponentFixture<AjouterPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterPanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
