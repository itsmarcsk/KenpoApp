import { TestBed } from '@angular/core/testing';

import { KatasTecnicasService } from './katas-tecnicas.service';

describe('KatasTecnicasService', () => {
  let service: KatasTecnicasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KatasTecnicasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
