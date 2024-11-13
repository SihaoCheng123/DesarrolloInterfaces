import { TestBed } from '@angular/core/testing';

import { CadaPokemonService } from './cada-pokemon.service';

describe('CadaPokemonService', () => {
  let service: CadaPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadaPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
