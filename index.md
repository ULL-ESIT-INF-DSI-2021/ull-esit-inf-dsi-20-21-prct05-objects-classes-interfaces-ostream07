# Desarollo de Sistemas Informáticos
## Práctica 5. Objetos, clases e interfaces

### --> Introducción

El objetivo de esta práctica es entrar en el manejo de objetos, clases e interfaces con Typescript.
[Material de apoyo](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-objects-classes-interfaces.html)


### Ejercicio 1. Pokedex

El objetivo de este ejercico es implementar una clase `Pokedex`, que recoja datos y estadísticas básicas de un pokemon, más adelante, deberemos crear una nueva clase llamada `Combat` que nos servirá para simular un combate pokemon.
En la clase `Pokedex`, he creado un **struct** con el objetivo de inicializar los valores de ataque, defensa, velocidad y puntos de salud de cada pokémon:
```
private stats = {
    atk: 0,
    def: 0,
    vel: 0,
    hp: 0,
  }
```
Luego, hemos inicializados los atributos, y creado una serie de getters y setters que nos facilitarán la manipulación de estos a lo largo del código.

Tenemos también una clase `Pokemon` que nos va a precisar los datos correspondientes de cada pokemon gracias al método `showPokedex()` como podemos ver en el siguiente ejemplo de una prueba:
```
showPokedex() returns [Pikachu, 6, 0.4, Electrico]
```

La otra clase con gran relevancia, es la clase `Combat`, donde estará definido dos objetos de tipo **Pokemon**, que serán los contendientes de la batalla. Los datos de ambos, serán introducidos en un método de esta clase llamado `pokemonFight()` donde se realizarán los cáluclos de daño de batalla atendiendo al tipo del pokémon, su ataque y su defensa. Finalmente este método devolverá el daño que causa cada uno de los pokemon así como el tipo del que es cada uno.


Ejemplos de pruebas:
```
Probar llamadas a un objeto de la clase Pokemon
    ✓ pokemon1.getName() returns value Pikachu
┌─────────┐
│ (index) │
├─────────┤
└─────────┘
    ✓ showPokedex() returns [Pikachu, 6, 0.4, Electrico]
El ataque del tipo Electrico causa al pokemon tipo Hierba 79 de daño
El ataque del tipo Hierba causa al pokemon tipo Electrico 56 de daño
    ✓ pokemonFight() returns Pikachu damage 78.57


  3 passing (38ms)
```