# Julian Blocks V4

Esta versión cambia el mundo fijo por un mundo procedural por chunks.

## Sistemas nuevos
- Mundo que se genera y descarga por chunks alrededor del jugador.
- 12 biomas: pradera, bosque, desierto, tundra, taiga, sabana, pantano, selva, meseta roja, montañas, isla de hongos y playa.
- Tierras Lejanas originales a partir de 2048 bloques: el terreno empieza a deformarse y crecer de forma extraña.
- Minimapa siempre visible y mapa grande con TAB.
- 52 bloques visuales.
- Más de 100 entradas en el catálogo creativo entre bloques, herramientas, materiales, comida y huevos de criaturas.
- 30 tipos de criaturas.
- IA sencilla por estados: deambular, perseguir, huir, evitar, trabajar, volver a casa, socializar y proteger.
- Aldeanos con profesión interna y guardianes que buscan hostiles.
- Estructuras procedurales: casas, torres y templos.
- Ciclo de día y noche.
- Guardado de cambios del mundo y posición del jugador.

## Controles
WASD: mover
Espacio: subir
Shift: bajar
F: turbo
E: inventario
C: crafteo
M: criaturas
TAB: mapa grande
K: guardar
L: cargar
R: volver al inicio
Clic izquierdo: romper/atacar
Clic derecho: colocar/usar mesa
Rueda: cambiar bloque

## Archivos
- src/main.js: juego, controles, UI, guardado, día/noche.
- src/world.js: chunks, terreno, biomas, estructuras y Tierras Lejanas.
- src/mobs.js: criaturas e IA.
- src/data.js: bloques, objetos, herramientas, criaturas y recetas.
- src/textures.js: texturas pixeladas generadas por código.
- src/style.css: interfaz.

## Importante
Esto no es una copia completa de Minecraft. Es un proyecto educativo original con sistemas parecidos. La siguiente etapa lógica sería optimizar chunks con InstancedMesh, añadir inventario de supervivencia real, aldeas más complejas, cofres, portales y dimensiones.

## Cambios V5
- El objeto seleccionado ahora aparece en la mano en primera persona.
- Al seleccionar un bloque o herramienta desde el inventario, queda equipado de verdad.
- Los números 1-9 y la rueda del mouse actualizan también el objeto visible.
- Aparecen aldeas gigantes raras en praderas y sabanas.
- Las aldeas gigantes tienen plaza, caminos, 8 casas, torre central, mesa de crafteo y horno.
- Cuando te acercas a una aldea gigante aparecen varios aldeanos y guardianes.
