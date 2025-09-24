import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { NgFor } from '@angular/common';

interface Pokemon {
  id: number;
  name: {
    fr: string;
    en: string;
    jp: string;
  };
  sprites: {
    regular: string;
    shiny: string;
  };
}

@Component({
  selector: 'app-pokemon-api',
  imports: [NgFor],
  templateUrl: './pokemon-api.html',
  styleUrl: './pokemon-api.css'
})

export class PokemonApi {
  constructor(private pokemonService: PokemonService) {}

  pokemons: Pokemon[] = [];
  
  ngOnInit() {
    this.pokemonService.fetchPokemonList().then(pokemons => {
      this.pokemons = pokemons;
      console.log(this.pokemons[0]);
    });
  }
  
  
}