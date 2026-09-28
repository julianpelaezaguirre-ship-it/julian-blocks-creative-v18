# Julian Blocks V11 — Mejoras visuales estilo Minecraft

Cambios sobre V10, sin tocar la jugabilidad ni el rendimiento (mismos draw calls por bloque):

- **Bloques de césped reales**: parte de arriba verde, laterales tierra con franja verde, abajo tierra — como en Minecraft.
- **Troncos con anillos y corteza**: la parte superior/inferior muestra anillos de madera, los lados tienen vetas verticales.
- **Sombreado por cara**: cada bloque se ve un poco más claro arriba y más oscuro abajo (igual que en Minecraft), horneado directo en la geometría para no gastar más potencia gráfica.
- **Texturas con más ruido/píxel**, en vez del patrón de puntitos sueltos anterior — se ve más "sucio" y menos plano.
- **Cielo**: nubes que se desplazan y un sol/luna visibles seguiendo el ciclo día/noche (se ocultan en la Dimensión de Brasas).

## Por qué no crece el consumo
Las texturas y el sombreado se reutilizan (misma geometría y mismo material para cada tipo de bloque en todo el mundo), así que no se agregan más triángulos ni más llamadas de dibujo por bloque que en V10.

Controles y modos de juego: igual que V10 (ver `README_JULIAN_V10.md`).
