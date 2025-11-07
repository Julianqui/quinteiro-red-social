# 📱 Red Social - Challenge Técnico

Aplicación de red social construida con **Next.js 15**, **Tailwind CSS 4**, **Redux** y **TypeScript**.

![Tests](https://img.shields.io/badge/tests-78%20passing-brightgreen?style=flat-square)
![Coverage](https://img.shields.io/badge/coverage-100%25%20atoms-brightgreen?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square)

## ✨ Destacados

- 🎨 **Storybook** - Documentación visual de componentes
- 🧪 **78 Unit Tests** - Jest + React Testing Library
- 🎯 **100% TypeScript** - Tipado completo
- 🌙 **Dark Mode** - Modo oscuro permanente
- 📱 **Responsive** - Adaptado a todos los dispositivos

## 📖 Índice

- [🚀 Inicio Rápido](#-inicio-rápido)
- [🏃 Cómo Levantar la Aplicación](#-cómo-levantar-la-aplicación)
- [📚 Cómo Levantar Storybook](#-cómo-levantar-storybook)
- [🧪 Testing](#-testing) ⭐ **Unit Tests con Jest**
- [🎯 Características](#-características)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🔑 Credenciales de Prueba](#-credenciales-de-prueba)
- [🎨 Scripts Disponibles](#-scripts-disponibles)
- [📦 Dependencias Principales](#-dependencias-principales)
- [🐛 Solución de Problemas](#-solución-de-problemas)

## 🚀 Inicio Rápido

### ⚡ Comandos Principales

```bash
# Instalar dependencias
npm install

# 🏃 Levantar aplicación (http://localhost:3000)
npm run dev

# 🧪 Ejecutar tests
npm test

# 📚 Levantar Storybook (http://localhost:6006)
npm run storybook
```

### 📋 Requisitos Previos

- **Node.js**: v20.16.0 o superior
- **npm**: v9 o superior

### 📦 Instalación

```bash
# Clonar el repositorio (si aplica)
git clone <repository-url>
cd Julian-my-social-app

# Instalar dependencias
npm install
```

## 🏃 Cómo Levantar la Aplicación

### Modo Desarrollo

```bash
npm run dev
```

La aplicación se abrirá en **http://localhost:3000**

### Build de Producción

```bash
# Crear el build
npm run build

# Ejecutar en producción
npm start
```

## 📚 Cómo Levantar Storybook

Storybook es un entorno de desarrollo para documentar y probar componentes de forma aislada.

```bash
npm run storybook
```

Storybook se abrirá en **http://localhost:6006**

### Build de Storybook

Para crear una versión estática de Storybook:

```bash
npm run build-storybook
```

Los archivos se generarán en `storybook-static/`

## 🧪 Testing

Esta aplicación cuenta con una **suite completa de unit tests** usando **Jest** y **React Testing Library**.

### 🚀 Ejecutar Tests

```bash
# Ejecutar todos los tests (una sola vez)
npm test

# Modo watch (re-ejecuta automáticamente al cambiar archivos)
npm run test:watch

# Ver cobertura de código con reporte HTML
npm run test:coverage
```

### 📊 Estadísticas de Tests

```
Test Suites: 7 passed, 7 total
Tests:       78 passed, 78 total
Snapshots:   0 total
Time:        ~2s
```

- ✅ **7 suites de tests** - Todos pasando
- ✅ **78 tests** - 100% exitosos
- ✅ **100% cobertura** en componentes Atoms
- ✅ **Tests para Molecules** principales (LoginForm, CommentItem)

### 📁 Componentes Testeados

#### Atoms (54 tests)
- ✅ `Button` - 13 tests (variantes, tamaños, estados)
- ✅ `Avatar` - 8 tests (imágenes, fallbacks, tamaños)
- ✅ `Input` - 12 tests (validaciones, tipos, eventos)
- ✅ `Textarea` - 11 tests (validaciones, estados)
- ✅ `IconButton` - 10 tests (variantes, accesibilidad)

#### Molecules (24 tests)
- ✅ `LoginForm` - 11 tests (validación email/password, submit)
- ✅ `CommentItem` - 7 tests (likes, autor, contenido)

### 🎯 Ejemplo de Salida

```bash
$ npm test

PASS components/atoms/Button/Button.test.tsx
  Button Component
    ✓ renders button with children (12 ms)
    ✓ handles onClick event (2 ms)
    ✓ renders primary variant (1 ms)
    ...
    
PASS components/molecules/LoginForm/LoginForm.test.tsx
  LoginForm Component
    ✓ validates email field on blur (7 ms)
    ✓ submits form with valid data (6 ms)
    ...

Test Suites: 7 passed, 7 total
Tests:       78 passed, 78 total
```

### 📚 Documentación Completa

Para una guía detallada sobre testing, mejores prácticas, debugging y más ejemplos, lee:

👉 **[TESTING.md](./TESTING.md)** - Guía completa de testing

## 🎯 Características

### ✨ Funcionalidades Principales

- ✅ **Autenticación** - Login con NextAuth (simulado con cualquier credencial)
- ✅ **Feed de Posts** - Visualización de publicaciones
- ✅ **Crear Posts** - Con texto e imágenes (upload desde computadora)
- ✅ **Interacciones** - Like, comentar, compartir, favoritos
- ✅ **Modo Oscuro** - Permanente en toda la aplicación
- ✅ **Responsive Design** - Adaptado a todos los dispositivos

### 🛠️ Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **React**: 18.3.1
- **Estilos**: Tailwind CSS 4
- **Estado Global**: Redux Toolkit + Redux Persist
- **Autenticación**: NextAuth.js
- **TypeScript**: Tipado completo
- **Storybook**: Documentación de componentes

### 🏗️ Arquitectura

- **Atomic Design**: Componentes organizados en Atoms, Molecules, Organisms
- **SSR + CSR**: Server-Side Rendering con Client-Side Rendering mínimo
- **Internacionalización**: Sistema i18n con archivo `locales/es.ts`

## 📂 Estructura del Proyecto

```
Julian-my-social-app/
├── app/                          # Next.js App Router
│   ├── api/auth/                 # Rutas de autenticación
│   ├── feed/                     # Página del feed
│   ├── login/                    # Página de login
│   ├── globals.css               # Estilos globales
│   ├── layout.tsx                # Layout principal
│   └── page.tsx                  # Página de inicio (redirect)
├── components/                   # Componentes React
│   ├── atoms/                    # Componentes básicos
│   │   ├── Avatar/
│   │   ├── Button/
│   │   ├── IconButton/
│   │   ├── Input/
│   │   └── Textarea/
│   ├── molecules/                # Componentes compuestos
│   │   ├── CommentItem/
│   │   ├── CommentList/
│   │   ├── CreatePostForm/
│   │   ├── LoginForm/
│   │   ├── PostActions/
│   │   ├── PostCard/
│   │   └── UserDropdown/
│   └── organisms/                # Componentes complejos
│       ├── FeedList/
│       └── Header/
├── data/                         # Datos mock
│   └── mockData.ts
├── interfaces/                   # Interfaces TypeScript
│   ├── Comment.interface.ts
│   ├── Post.interface.ts
│   ├── User.interface.ts
│   └── index.ts
├── lib/                          # Utilidades y configuraciones
│   ├── auth.ts                   # Configuración NextAuth
│   ├── i18n.ts                   # Sistema de internacionalización
│   ├── providers.tsx             # Redux + NextAuth Providers
│   └── ThemeWrapper.tsx          # Wrapper para modo oscuro
├── locales/                      # Traducciones
│   └── es.ts                     # Textos en español
├── store/                        # Redux Store
│   ├── slices/
│   │   ├── authSlice.ts          # Estado de autenticación
│   │   ├── postsSlice.ts         # Estado de posts
│   │   └── themeSlice.ts         # Estado del tema
│   ├── hooks/                    # Custom hooks de Redux
│   └── store.ts                  # Configuración del store
├── .storybook/                   # Configuración Storybook
│   ├── main.ts
│   └── preview.tsx
├── public/                       # Archivos estáticos
├── STORYBOOK.md                  # Documentación de Storybook
├── next.config.ts                # Configuración Next.js
├── tailwind.config.ts            # Configuración Tailwind
├── tsconfig.json                 # Configuración TypeScript
└── package.json
```

## 🔑 Credenciales de Prueba

Para iniciar sesión, usa **cualquier email y contraseña** (mínimo 6 caracteres).

Ejemplos:
- **Email**: `test@example.com`
- **Password**: `123456`

## 📖 Documentación Adicional

- **Testing**: Lee **[TESTING.md](./TESTING.md)** para guía completa de testing
- **Storybook**: Lee **[STORYBOOK.md](./STORYBOOK.md)** para documentación de componentes
- **Internacionalización**: Los textos están centralizados en `locales/es.ts` y se acceden con `t('clave')`

## 🎨 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Inicia Next.js en modo desarrollo
npm run storybook        # Inicia Storybook

# Testing
npm test                 # Ejecuta todos los tests
npm run test:watch       # Modo watch para tests
npm run test:coverage    # Genera reporte de cobertura

# Producción
npm run build            # Build de Next.js
npm start                # Inicia Next.js en producción
npm run build-storybook  # Build de Storybook

# Otros
npm run lint             # Ejecuta el linter
```

## 🌐 URLs

Cuando la aplicación esté corriendo:

- **Aplicación**: http://localhost:3000
- **Storybook**: http://localhost:6006 (si está corriendo)

## 🎯 Flujo de Usuario

1. **Login** (http://localhost:3000/login)
   - Ingresa cualquier email y contraseña
   - Serás redirigido al feed

2. **Feed** (http://localhost:3000/feed)
   - Ver posts de otros usuarios
   - Crear nuevos posts (texto + imagen)
   - Dar like, comentar, compartir
   - Agregar a favoritos
   - Cerrar sesión desde el dropdown del avatar

## 🔧 Configuración

### Variables de Entorno

El proyecto funciona sin variables de entorno adicionales. NextAuth está configurado para funcionar en desarrollo sin configuración extra.

### Modo Oscuro

La aplicación está configurada para usar **modo oscuro permanente**. No hay opción para cambiar a modo claro.

## 📦 Dependencias Principales

```json
{
  "next": "^15.0.3",
  "react": "^18.3.1",
  "react-redux": "^9.2.0",
  "@reduxjs/toolkit": "^2.10.1",
  "redux-persist": "^6.0.0",
  "next-auth": "^4.24.13",
  "tailwindcss": "^4",
  "@storybook/nextjs": "^8.6.14",
  "jest": "latest",
  "@testing-library/react": "latest"
}
```

## 🐛 Solución de Problemas

### Error al instalar dependencias

```bash
# Si tienes problemas con peer dependencies
npm install --legacy-peer-deps
```

### Puerto 3000 en uso

```bash
# Mata el proceso en el puerto 3000
lsof -ti:3000 | xargs kill -9

# O usa otro puerto
PORT=3001 npm run dev
```

### Storybook no inicia

```bash
# Limpia caché y reinstala
rm -rf node_modules .next storybook-static
npm install
npm run storybook
```

## 📝 Notas Técnicas

- **SSR**: Las páginas usan Server-Side Rendering por defecto
- **Client Components**: Los componentes interactivos usan `'use client'`
- **Images**: Configurado para usar imágenes de `i.pravatar.cc` y `images.unsplash.com`
- **Persistencia**: Redux Persist guarda auth y theme en localStorage

## 🚀 Deployment

### Vercel (Recomendado)

```bash
# Instala Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build Manual

```bash
npm run build
npm start
```

## 👨‍💻 Desarrollo

Creado como Challenge Técnico demostrando:

### 🏗️ Arquitectura & Diseño
- ✅ **Next.js 15** con App Router (SSR + CSR)
- ✅ **TypeScript** - Tipado completo en toda la aplicación
- ✅ **Atomic Design** - Componentes organizados (Atoms, Molecules, Organisms)
- ✅ **Tailwind CSS 4** - Estilos modernos y responsive

### 🔄 Estado & Autenticación
- ✅ **Redux Toolkit** - Estado global
- ✅ **Redux Persist** - Persistencia en localStorage
- ✅ **NextAuth** - Autenticación simulada

### 🧪 Testing & Documentación
- ✅ **Jest + React Testing Library** - 78 unit tests
- ✅ **Storybook** - Documentación visual de componentes
- ✅ **100% cobertura** en componentes Atoms

### 🎨 UX & Diseño
- ✅ **Dark Mode** permanente
- ✅ **Responsive Design** - Móvil, tablet, desktop
- ✅ **Internacionalización (i18n)** - Sistema de traducciones

## 📊 Resumen del Proyecto

| Categoría | Detalle |
|-----------|---------|
| 🧪 **Tests** | 78 tests, 7 suites, 100% pasando |
| 📦 **Componentes** | 5 Atoms, 7 Molecules, 2 Organisms |
| 📚 **Storybook** | 10+ stories documentadas |
| 🎨 **Estilos** | Tailwind CSS 4 + Dark Mode |
| ⚡ **Performance** | SSR + React 18 + Next.js 15 |

## 🔗 Enlaces Útiles

- 📖 **[TESTING.md](./TESTING.md)** - Guía completa de testing
- 📚 **[STORYBOOK.md](./STORYBOOK.md)** - Documentación de Storybook
- 🌐 **[Aplicación](http://localhost:3000)** - Desarrollo local
- 📊 **[Storybook](http://localhost:6006)** - Visualización de componentes

---

**¿Preguntas o problemas?** Revisa la documentación o abre un issue.

**Hecho con ❤️ usando Next.js 15, TypeScript, Tailwind CSS 4 y Jest**
