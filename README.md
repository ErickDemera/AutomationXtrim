🤖 Proyecto de Automatización Web con Playwright
Este proyecto contiene un conjunto de pruebas de automatización de extremo a extremo (E2E) desarrolladas con Playwright en TypeScript.
El objetivo es validar funcionalidades críticas en los portales de Xtrim (contacto y Zapping) 

🚀 Tecnologías Utilizadas
| Tecnología | Descripción |
| -- | -- |
|Playwright | Framework de automatización para E2E. |
|TypeScript | Lenguaje de programación principal para el desarrollo.|
|Node.js | Entorno de ejecución requerido.|
|Page Object Model (POM) | Patrón de diseño utilizado para la organización del código.|

⚙️ Estructura del Proyecto
El proyecto sigue el patrón Page Object Model (POM) para mantener el código limpio, reutilizable y fácil de mantener.

├── .gitignore
├── package.json
├── playwright.config.ts
├── tests/
│   ├── AutomationXtrim.spec.ts   # Pruebas para Xtrim (Contacto, Zapping)
│   └── AutomationSRI.spec.ts     # Pruebas para el Login del SRI
└── page-objects/
    ├── ContactPage.ts            # POM para el formulario de Contacto de Xtrim
    ├── ZappingPage.ts            # POM para la validación del plan Zapping
    └── SriPage.ts                # POM para el login del SRI

📦 Instalación y Configuración

Sigue estos pasos para poner en marcha el proyecto en tu máquina local.
1. Requisitos Previos
   Tener Node.js instalado (versión 22.x o superior).
   El Node.js con el que se desarrolló el proyecto v22.17.0
2. Clonar el RepositorioBashgit clone (https://github.com/ErickDemera/AutomationXtrim)
3. Dirigirte a la dirección donde clonaste el proyecto
`cd [nombre-del-directorio-clonado]`
`cd AutomationXtrim`
4. Instalar Dependencias
   Instala los módulos de Node y los browsers de Playwright:
   Bash
   - `npm install`
   - `npx playwright install`
   
▶️ Ejecución de Pruebas
Los tests están configurados para ejecutarse por defecto en el browser Chromium.
1. Ejecutar todos los Tests
   Este comando ejecuta todos los archivos .spec.ts en el modo headless (sin interfaz gráfica):
   `Bashnpx playwright test`
2. Ejecutar un Archivo Específico
   Puedes enfocarte en las pruebas de una sola sección:
   Bash
   # Ejecutar solo las pruebas de Xtrim
   `npx playwright test tests/AutomationXtrim.spec.ts`

⚠️ Nota Importante sobre reCAPTCHA (Zapping), para el entorno de pruebas, es posible que el botón "Continuar" o "Aceptar" permanezca deshabilitado debido a la presencia de sistemas de seguridad como reCAPTCHA o mecanismos anti-bot.
Solución para QA: En un entorno de QA controlado, se recomienda solicitar al equipo de desarrollo la deshabilitación temporal o la inclusión de un token de bypass para las pruebas automatizadas.
Comportamiento Actual: El código está escrito para esperar a que el botón se habilite, lo que puede causar un Test timeout of 30000ms exceeded si el reCAPTCHA no se resuelve automáticamente.
