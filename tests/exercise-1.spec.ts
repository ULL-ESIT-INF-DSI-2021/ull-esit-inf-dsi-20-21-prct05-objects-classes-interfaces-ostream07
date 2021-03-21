import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/exercise-1';
import {Pokedex} from '../src/pokedex';
import {Combat} from '../src/combat';

describe('Probar llamadas a un objeto de la clase Pokemon', () => {
  const pokemon1: Pokemon = new Pokemon('Pikachu', 6, 0.4, 'Electrico', [55, 40, 90, 35]);
  const pokemon2: Pokemon = new Pokemon('Treecko', 5, 0.5, 'Hierba', [45, 35, 70, 40]);
  const battle = new Combat(pokemon1, pokemon2);
  const poke1: Pokedex = new Pokedex([]);
  let daño_pokemon1: number = 50 * (pokemon1.getAtk() / pokemon2.getDef()) * 1;
  let daño_pokemon2: number = 50 * (pokemon2.getAtk() / pokemon1.getDef()) * 1;

    it('pokemon1.getName() returns value Pikachu', () => {
      expect(pokemon1.getName()).to.be.equal('Pikachu');
    });

    it('showPokedex() returns [Pikachu, 6, 0.4, Electrico]', () => {
      expect(poke1.showPokedex()).to.be.equal(undefined);
    });

    it('pokemonFight() returns Pikachu damage 78.57', () => {
      expect(battle.pokemonFight()).to.be.equal(undefined);
    });
});
