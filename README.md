# Amigo Secreto

Este es mi primer proyecto del programa Oracle Next Education (ONE). Fue bastante desafiante pero al final logré que funcionara!

# ¿De qué se trata?

Es una aplicación simple donde puedes agregar nombres de amigos y la computadora elige uno al azar para el amigo secreto. Nada muy loco, pero cumple su función.

# Lo que hace

- Agregas nombres en un input
- Se van mostrando en una lista
- Cuando tengas varios nombres, aprietas sortear
- Te dice quién salió elegido
- Si no hay nombres o el campo está vacío te avisa

# Capturas de como funciona

### Pantalla inicial
![Pantalla inicial](screenshots/pantalla-inicial.png)

### Con nombres agregados
![Agregando nombres](screenshots/agregando-nombres.png)  

### Resultado del sorteo
![Resultado sorteo](screenshots/resultado-sorteo.png)


# Tecnologías que usé

- HTML para la estructura básica (proporcionada por ustedes mismos)
- CSS para que se vea bien (usé las fuentes que nos dieron)
- JavaScript para toda la lógica

# Cómo probarlo

1. Abrí el archivo index.html en el navegador
2. Escribí algunos nombres de amigos
3. Dale a "Añadir" para cada uno
4. Cuando tengas varios, clickeá "Sortear amigo"
5. Y debería mostrar un nombre aleatorio para amigo secreto

# Lo que aprendí

- Manejar arrays en JavaScript
- Usar Math.random() para generar números aleatorios  
- Manipular el DOM con getElementById
- Validar formularios antes de procesar
- Crear elementos HTML desde JavaScript

# Problemas que tuve

Al principio no entendía bien como hacer que se actualizara la lista automáticamente, pero después de varios intentos logré que funcionara con innerHTML y un bucle for.

También me costó un poco el tema del sorteo aleatorio, pero Math.floor y Math.random me ayudaron bastante.

# Archivos del proyecto

- index.html - la página principal
- style.css - todos los estilos
- app.js - el código JavaScript
- assets/ - las imágenes que nos dieron
- screenshots/ - capturas para el readme

Hecho por John Alejandro Castro Leites para entregar el challenge para pasar a la siguiente fase de Oracle Next Education


Mi primer proyecto real de programación! Seguro hay cosas que se pueden mejorar pero estoy contento con el resultado.