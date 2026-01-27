# Browser Extensions Manager

Una herramienta para gestionar y sincronizar extensiones de navegador de forma ordenada y reproducible. Facilita la exportación/importación de listas de extensiones, la aplicación de perfiles y la sincronización entre equipos o entornos.

[![Estado](https://img.shields.io/badge/status-en%20desarrollo-yellow.svg)]
[![Licencia](https://img.shields.io/badge/license-MIT-blue.svg)]
[![Lenguajes](https://img.shields.io/github/languages/top/RMAlt-64/Browser-extensions-manager.svg)]

Tabla de contenidos
- [Descripción](#descripción)
- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Configuración](#configuración)
- [Desarrollo](#desarrollo)
- [Pruebas](#pruebas)
- [Contribuir](#contribuir)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Descripción
Browser Extensions Manager permite:
- Mantener una lista centralizada y versionada de extensiones.
- Exportar e importar configuraciones por perfil en formato JSON/YAML.
- Sincronizar extensiones y configuraciones entre perfiles o equipos.
- Aplicar políticas o ajustes por extensión cuando sea posible.

Ajusta esta descripción si el alcance real difiere.

## Características
- Exportación / importación de listas de extensiones.
- Gestión de múltiples perfiles (p. ej. "Trabajo", "Personal").
- Soporte pensado para Chrome/Chromium y Firefox (ajustable).
- Formatos de intercambio: JSON / YAML.
- Integración sencilla con flujos de automatización.

## Requisitos
- Node.js >= 16 (si aplica)
- npm o yarn (si aplica)
- Permisos para gestionar extensiones en los perfiles objetivo
- Navegadores compatibles: Chrome / Chromium / Firefox (según soporte implementado)

## Instalación
Clona el repositorio y prepara el entorno:

```bash
git clone https://github.com/RMAlt-64/Browser-extensions-manager.git
cd Browser-extensions-manager
# Instalar dependencias (ejemplo)
npm install
```

## Uso
Comandos de ejemplo (sustituye por los reales del proyecto):

Modo desarrollo:
```bash
npm run start
```

Generar build para producción:
```bash
npm run build
```

Exportar lista de extensiones:
```bash
node ./bin/export-extensions --profile "Default" --out extensions.json
```

Importar lista de extensiones:
```bash
node ./bin/import-extensions --in extensions.json --profile "Work"
```

## Configuración
Ejemplo de `config.example.json`:

```json
{
  "profiles": [
    {
      "name": "Default",
      "browser": "chrome",
      "sync": true
    }
  ],
  "output": "./exports"
}
```

Copia y renombra a `config.json` para usarlo.

## Desarrollo
Flujo recomendado para contribuir:

1. Crear una rama para la feature o fix:
   ```bash
   git checkout -b feat/nombre-de-feature
   ```
2. Ejecutar en modo desarrollo:
   ```bash
   npm run dev
   ```
3. Ejecutar linters y tests antes de abrir PR:
   ```bash
   npm run lint
   npm test
   ```

Incluye convenciones de commits (p. ej. Conventional Commits) si las usas.

## Pruebas
Ejecuta la suite de pruebas:
```bash
npm test
# o
npm run test:watch
```
Indica aquí las herramientas (Jest, Mocha, Playwright) y la cobertura esperada.

## Contribuir
1. Haz fork del repositorio.
2. Crea una rama con nombre claro (`feat/`, `fix/`).
3. Asegúrate de que los tests pasan y el linter está limpio.
4. Abre un Pull Request detallando los cambios y la motivación.

## Licencia
Este proyecto está bajo la licencia MIT. Reemplaza según corresponda.

## Contacto
Autor: RMAlt-64  
Repositorio: https://github.com/RMAlt-64/Browser-extensions-manager

---
Si quieres, puedo:
- Añadir badges reales de CI/coverage y dependabot.
- Extraer scripts y comandos directamente del repo (por ejemplo del package.json) para rellenar las secciones de Instalación y Uso.
- Incluir capturas o ejemplos reales de salida.
