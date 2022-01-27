import { TestBed } from '@angular/core/testing';

import { AjouterPanierService } from './ajouter-panier.service';

describe('AjouterPanierService', () => {
  let service: AjouterPanierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouterPanierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
