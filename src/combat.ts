import {Pokemon} from './exercise-1';

/**
 * Clase Combat, simula el combate entre 2 pokemon
 */
export class Combat {

  /**
   * Constructor de la clase
   * @param pokemon1 Primer pokemon
   * @param pokemon2 Segundo pokemon
   */
  constructor(private pokemon1: Pokemon, private pokemon2: Pokemon) {
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
  }

  /**
   * Funcion particitantes del combate
   * @returns Participantes de la batalla
   */
  public getCombate() {
    return (`El combate será de ${this.pokemon1.getName()} contra ${this.pokemon2.getName()}`);
  }

  /**
   * Funcion simula la batalla y cálculos de daño
   * @param atacante Recibe 0 o 1 en función de quien ataca a quien
   * @returns El daño realizado en ese ataque
   */
  public pokemonFight() {
    let efectividad_tipo1: number = 1;
    let efectividad_tipo2: number = 1;
    let daño_pokemon1: number = 0;
    let daño_pokemon2: number = 0;
  
    if(this.pokemon1.getElementalType() == "Agua" && this.pokemon2.getElementalType() == "Fuego" || 
      this.pokemon1.getElementalType() == "Fuego" && this.pokemon2.getElementalType() == "Hierba" || 
      this.pokemon1.getElementalType() == "Hierba" && this.pokemon2.getElementalType() == "Agua" || 
      this.pokemon1.getElementalType() == "Electrico" && this.pokemon2.getElementalType() == "Agua") {

      efectividad_tipo1 = efectividad_tipo1 * 2;
      efectividad_tipo2 = efectividad_tipo2 * 0.5;

    } else if (this.pokemon1.getElementalType() == "Fuego" && this.pokemon2.getElementalType() == "Electrico" || 
              this.pokemon1.getElementalType() == "Electrico" && this.pokemon2.getElementalType() == "Fuego" ||
              this.pokemon1.getElementalType() == "Hierba" && this.pokemon2.getElementalType() == "Electrico" || 
              this.pokemon1.getElementalType() == "Electrico" && this.pokemon2.getElementalType() == "Hierba") {

      efectividad_tipo1 = efectividad_tipo1 * 1;
      efectividad_tipo2 = efectividad_tipo2 * 1;

      } else if (this.pokemon1.getElementalType() == "Fuego" && this.pokemon2.getElementalType() == "Agua" ||
                this.pokemon1.getElementalType() == "Hierba" && this.pokemon2.getElementalType() == "Fuego" || 
                this.pokemon1.getElementalType() == "Agua" && this.pokemon2.getElementalType() == "Hierba" || 
                this.pokemon1.getElementalType() == "Agua" && this.pokemon2.getElementalType() == "Electrico"){
        efectividad_tipo1 = efectividad_tipo1 * 0.5
        efectividad_tipo2 = efectividad_tipo2 * 2;
      } else {
        efectividad_tipo1 = efectividad_tipo1 * 0.5;
        efectividad_tipo2 = efectividad_tipo2 * 0.5;
      }
      daño_pokemon1 = 50 * (this.pokemon1.getStats().atk / this.pokemon2.getStats().def) * efectividad_tipo1;
      daño_pokemon2 = 50 * (this.pokemon2.getStats().atk / this.pokemon1.getStats().def) * efectividad_tipo2;
      daño_pokemon1 = Math.round(daño_pokemon1);
      
      console.log("El ataque del tipo " + this.pokemon1.getElementalType() + 
          " causa al pokemon tipo " + this.pokemon2.getElementalType() + " " + Math.round(daño_pokemon1) + " de daño");

      console.log("El ataque del tipo " + this.pokemon2.getElementalType() + 
        " causa al pokemon tipo " + this.pokemon1.getElementalType() + " " + Math.round(daño_pokemon2) + " de daño");
  }
}