import { TestBed } from '@angular/core/testing';

import { ArtistaMarcialService } from './artista-marcial.service';

describe('ArtistaMarcialService', () => {
  let service: ArtistaMarcialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistaMarcialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
