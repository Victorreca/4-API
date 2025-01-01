# S4. API

## 📄 Descripción

Este proyecto es una aplicación web desarrollada como parte de un experimento de una empresa de coaching en Barcelona. El objetivo es medir el impacto del humor y la diversión en la productividad de los trabajadores antes de comenzar su jornada laboral.

La web muestra chistes obtenidos desde dos APIs públicas:

- **icanhazdadjoke:** Chistes de humor general.
- **Chuck Norris API:** Chistes específicos del personaje Chuck Norris.

Además, la aplicación permite valorar los chistes utilizando emojis y guarda las puntuaciones en una lista local para análisis futuros.

## ✨ Características

- **Interfaz de Usuario Intuitiva:** Diseño intuitivo y fácil de usar para una experiencia de usuario agradable.

- **Diseño Responsivo:** Compatible con dispositivos móviles y de escritorio para una experiencia uniforme en todas las plataformas.

- **Valoración de Chistes:** Los usuarios pueden valorar los chistes con emojis, y sus puntuaciones se registran localmente.

- **Cambio Dinámico de Formas:** El contenedor de los chistes cambia de forma automáticamente con cada nuevo chiste, añadiendo un toque visual divertido.

- **Integración con APIs Externas:**

  - icanhazdadjoke para obtener chistes de humor general.
  - Chuck Norris API para chistes específicos del personaje Chuck Norris.
  - OpenWeatherMap para mostrar la temperatura actual y la ciudad.

- **Gestión de Errores:** Mensajes de error claros y específicos si las llamadas a las APIs fallan o si los elementos requeridos del DOM no están disponibles.

- **Optimización de Rendimiento:** Uso eficiente de TypeScript para garantizar un código más robusto y mantenible.

- **Facilidad de Extensión:** La arquitectura del proyecto permite añadir nuevas APIs de chistes u otras funcionalidades en el futuro con facilidad.

- **Accesibilidad:** El diseño incluye consideraciones básicas para garantizar que todos los usuarios puedan interactuar con la aplicación cómodamente.

## 💻 Tecnologías Utilizadas

- HTML5
- Sass
- TypeScript
- [Bootstrap 5] (https://getbootstrap.com/)
- Apis:
  - icanhazdadjoke
  - Chuck Norris API
  - OpenWeatherMap

## 📋 Requisitos

- Navegador web moderno.
- Node.js y npm instalados en tu sistema. Puedes descargarlos desde [nodejs.org](https://nodejs.org/).

## 🛠️ Instalación

**✔️ Paso 1:** Clona el repositorio:

```bash
git clone https://github.com/Victorreca/4-API
```

**✔️ Paso 2:** Ingresa al directorio del proyecto:

```bash
cd 4-API
```

**✔️ Paso 3:** Instala las dependencias:

```bash
npm install
```

**✔️ Paso 4:** Ejecuta Sass en modo automático:

```bash
npm run sass
```

**✔️ Paso 5:** (Opcional) Si necesitas compilar TypeScript automáticamente, usa el siguiente comando:

```bash
npx tsc --watch
```

**✔️ Paso 6:** Para ejecutar la aplicación, abre el archivo index.html en tu navegador o utiliza una extensión de servidor local, como "Live Server" de VS Code.

## 🤝 Contribuciones

¡Gracias por tu interés en contribuir! Para colaborar:

1. Realiza un fork del repositorio.
2. Crea una rama para tu funcionalidad o corrección de errores:

```bash
git checkout -b nombre-rama
```

3. Realiza tus cambios y asegúrate de seguir las guías de estilo del código.
4. Crea un pull request detallando los cambios realizados.

## 🛠️ Uso

1. Abre la aplicación en tu navegador.
2. Pulsa el botón para obtener un nuevo chiste.
3. Valora el chiste utilizando los emojis disponibles.
4. Observa cómo el contenedor cambia de forma con cada nuevo chiste.
5. Consulta la temperatura actual y la ciudad mostradas en pantalla.
