import { TestBed } from '@angular/core/testing';

import { PokemonServiceTs } from './pokemon.service.ts';

describe('PokemonServiceTs', () => {
  let service: PokemonServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
