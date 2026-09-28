# Julian Blocks V9

## Novedades principales

### Cuevas V9
El subsuelo ahora llega más profundo y usa dos sistemas de ruido para formar túneles y cámaras. Los minerales aparecen a distintas profundidades.

### Energía
Nuevos bloques:
- Polvo conductor
- Palanca
- Lámpara eléctrica

Coloca una palanca conectada por polvo conductor hasta una lámpara. Haz clic derecho sobre la palanca para encender o apagar el circuito.

Cerca del inicio hay un pequeño circuito de ejemplo.

### Portales y Dimensión de Brasas
Hay nuevos bloques de portal:
- Piedra de portal
- Núcleo de portal

Cerca del inicio existe un portal de prueba. Haz clic derecho sobre el núcleo morado para viajar a la Dimensión de Brasas. Allí se genera un portal de regreso.

La Dimensión de Brasas tiene terreno, cuevas y minerales propios.

### Aldeanos constructores
Algunos aldeanos tienen la profesión `constructor`. Cuando viven cerca de una aldea pueden colocar lentamente tablones o adoquines para ampliar o reparar la zona.

## Controles
- WASD: movimiento
- Espacio / Shift: subir / bajar
- E: inventario
- C: crafteo
- M: criaturas
- TAB: mapa
- T: clima
- K: guardar
- L: cargar
- Clic izquierdo: romper / atacar
- Clic derecho: colocar / usar palancas / usar portales / interactuar

## Cómo iniciar
```powershell
npm install
npm run dev
```

## Archivos nuevos/importantes
- `src/systems.js`: electricidad, portales de prueba y comportamiento de construcción.
- `src/world.js`: chunks, cuevas y generación de dimensiones.
- `src/mobs.js`: IA y movimiento de criaturas.
- `src/main.js`: conecta todos los sistemas.
