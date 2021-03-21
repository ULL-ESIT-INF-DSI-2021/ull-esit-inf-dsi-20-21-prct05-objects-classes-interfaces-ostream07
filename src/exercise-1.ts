
/**
 * Class Pokemon, contiene los datos básicos, así como las estadísticas de un pokemon
 */
export class Pokemon {
  private stats = {
    atk: 0,
    def: 0,
    vel: 0,
    hp: 0,
  }

  /**
   * Constructor de la clase
   * @param name Nombre del pokemon
   * @param weight Peso del pokemon
   * @param height Altura del pokemon
   * @param elementalType Tipo del pokemon
   * @param stats Estadísticas del pokemon
   */
  constructor(private name: string, private weight: number, private height: number, private elementalType: string, stats: number[]) {
    this.stats.atk = stats[0];
    this.stats.def = stats[1];
    this.stats.vel = stats[2];
    this.stats.hp = stats[3];
  }

  /**
   * Función de la que se obtiene el nombre del pokemon
   * @returns Nombre del pokemon
   */
  public getName() {
    return this.name;
  }

  /**
   * Función de la que se obtiene el peso del pokemon
   * @returns Peso del pokemon
   */
  public getWeight() {
    return this.weight;
  }

  /**
   * Función de la que se obtiene la altura del pokemon
   * @returns Altura del pokemon
   */
  public getHeight() {
    return this.height;
  }

  /**
   * Función de la que se obtiene el tipo del pokemon
   * @returns Tipo del pokemon
   */
  public getElementalType() {
    return this.elementalType;
  }

  /**
   * Función de la que se obtienen las estadísticas del pokemon
   * @returns Estadísticas del pokemon
   */
  public getStats() {
    return this.stats;
  }

  public getAtk() {
    return this.stats[0];
  }

  public getDef() {
    return this.stats[1];
  }

  /**
   * Función de la que se obtiene la salud del pokemon
   * @returns Salud del pokemon
   */
  public setHp(ps: number) {
    this.stats.hp = ps;
  }

}
