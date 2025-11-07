Aquí tienes el contenido listo para guardarlo en un archivo README.md o INSTRUCCIONES.md dentro del proyecto.

Markdown

# Prueba Técnica: Buscador de Productos (React)

¡Hola! Bienvenido/a a esta sesión de live-coding de 60 minutos.

## El Objetivo

Construiremos un componente de búsqueda de productos que consume una API real. El objetivo no es terminarlo todo, sino ver cómo estructuras tu código, cómo gestionas la asincronía y cómo razonas sobre los problemas que surgen.

**Lo más importante:** Por favor, **piensa en voz alta**. Explícanos tus decisiones, las alternativas que consideras y por qué eliges un camino sobre otro.

## El Escenario

Usaremos un proyecto de **Vite + React**.

**Tu tarea:** Implementar un buscador de productos. Cada vez que el usuario escriba en un campo de texto, deberás llamar a esta API para obtener resultados:

`https://dummyjson.com/products/search?q={terminoDeBusqueda}`

---

## Fases del Ejercicio

### Fase 1: La Búsqueda Funcional (Aprox. 20-25 min)

**Objetivo:** Mostrar resultados de búsqueda de la API.

**Tareas:**
1.  Añade un campo de texto (`<input>`) a la aplicación.
2.  Cada vez que el valor del input cambie, ejecuta una llamada a la API (`/search?q=...`) con el nuevo valor.
3.  Muestra el estado de "Cargando..." (Loading) mientras la petición está en curso.
4.  Renderiza la lista de productos (`data.products`) cuando la petición se complete.
5.  Si la petición falla, muestra un mensaje de error.

### Fase 2: Optimización y Robustez (Aprox. 20 min)

**Objetivo:** Identificar y solucionar los problemas de la Fase 1.

**Contexto:** Nuestra implementación actual es funcional, pero tiene problemas de rendimiento y posibles *bugs* de concurrencia.

**Tareas:**
1.  **Optimización:** Estamos llamando a la API en *cada* pulsación de tecla. ¿Cómo podrías optimizar esto para reducir la cantidad de llamadas de red?
2.  **Robustez:** Si un usuario escribe "phone" (Petición A) y muy rápido "laptop" (Petición B), es posible que la Petición A (phone) tarde más en resolverse y llegue *después* que la Petición B (laptop). Esto mostraría resultados incorrectos ("phone") aunque el input diga "laptop". ¿Cómo podrías solucionar este problema?

### Fase 3: Pruebas E2E (Aprox. 15 min)

**Objetivo:** Garantizar que nuestra funcionalidad de búsqueda es fiable.

**Tareas:**
1.  Abre el archivo de pruebas de Playwright (`tests/search.spec.js`).
2.  Escribe una prueba que verifique el "camino feliz":
    * Escribe "iPhone" en el buscador.
    * Verifica (assert) que el producto "iPhone 9" aparece en la lista.
3.  **Bonus (si queda tiempo):** ¿Cómo probarías de forma fiable que el estado "Cargando..." aparece? ¿O que se muestra un mensaje de error si la API falla?
4. 