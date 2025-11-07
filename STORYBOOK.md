# 📚 Storybook - Documentación de Componentes

Este proyecto incluye **Storybook** para documentar y visualizar todos los componentes de la aplicación de forma aislada.

## 🚀 Ejecutar Storybook

```bash
npm run storybook
```

Esto abrirá Storybook en http://localhost:6006

## 📦 Build de Storybook

Para crear una versión estática de Storybook:

```bash
npm run build-storybook
```

Los archivos se generarán en la carpeta `storybook-static/`

## 📁 Estructura de Stories

```
components/
├── atoms/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.stories.tsx  ✅
│   │   └── index.ts
│   ├── Avatar/
│   │   ├── Avatar.tsx
│   │   ├── Avatar.stories.tsx  ✅
│   │   └── index.ts
│   ├── Input/
│   │   ├── Input.tsx
│   │   ├── Input.stories.tsx  ✅
│   │   └── index.ts
│   ├── Textarea/
│   │   ├── Textarea.tsx
│   │   ├── Textarea.stories.tsx  ✅
│   │   └── index.ts
│   └── IconButton/
│       ├── IconButton.tsx
│       ├── IconButton.stories.tsx  ✅
│       └── index.ts
├── molecules/
│   ├── LoginForm/
│   │   ├── LoginForm.tsx
│   │   ├── LoginForm.stories.tsx  ✅
│   │   └── index.ts
│   └── CreatePostForm/
│       ├── CreatePostForm.tsx
│       ├── CreatePostForm.stories.tsx  ✅
│       └── index.ts
```

## 🎨 Características implementadas

### ✅ Tema Oscuro/Claro
Storybook incluye un switch para alternar entre modo oscuro y claro en la barra de herramientas.

### ✅ Componentes Atoms
- **Button** - Todas las variantes, tamaños y estados
- **Avatar** - Todos los tamaños con y sin imagen
- **Input** - Diferentes tipos, estados y errores
- **Textarea** - Diferentes tamaños y estados
- **IconButton** - Todas las variantes y tamaños

### ✅ Componentes Molecules
- **LoginForm** - Estados normal, loading y con error
- **CreatePostForm** - Formulario de creación de posts

### ✅ Auto Documentación
Cada componente tiene documentación automática de sus props y tipos.

### ✅ Interactividad
Todos los controles son interactivos para probar diferentes props.

## 📖 Cómo crear una nueva Story

### 1. Crear el archivo `.stories.tsx`

```tsx
// components/atoms/MiComponente/MiComponente.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MiComponente } from './MiComponente';

const meta = {
  title: 'Atoms/MiComponente',
  component: MiComponente,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Visual variant',
    },
  },
} satisfies Meta<typeof MiComponente>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};
```

### 2. La story aparecerá automáticamente en Storybook

No necesitas hacer nada más, Storybook detecta automáticamente los archivos `.stories.tsx`

## 🎯 Categorías de Stories

Las stories están organizadas en categorías según Atomic Design:

- **Atoms/** - Componentes básicos (Button, Input, Avatar, etc.)
- **Molecules/** - Componentes compuestos (LoginForm, PostCard, etc.)
- **Organisms/** - Componentes complejos (Header, FeedList, etc.)

## 🛠️ Configuración

### `.storybook/main.ts`
Configuración principal de Storybook:
- Ubicación de las stories
- Addons instalados
- Framework (Next.js)

### `.storybook/preview.ts`
Configuración de visualización:
- Importa los estilos globales (Tailwind CSS)
- Configura el tema oscuro/claro
- Aplica decoradores globales

## 📝 Tips

### Usar el modo oscuro por defecto
El modo oscuro está configurado como predeterminado para coincidir con la aplicación.

### Probar diferentes estados
Cada componente tiene múltiples stories que muestran diferentes estados y variantes.

### Documentación automática
Usa el tag `'autodocs'` para generar documentación automática de props.

### Controles interactivos
Usa `argTypes` para definir controles interactivos en el panel de propiedades.

## 🌐 Deploy de Storybook

Puedes deployar Storybook en plataformas como:
- **Chromatic** (recomendado para testing visual)
- **Vercel**
- **Netlify**
- **GitHub Pages**

Ejemplo para Vercel:
```bash
npm run build-storybook
# Sube la carpeta storybook-static/
```

## 📚 Recursos

- [Documentación oficial de Storybook](https://storybook.js.org/)
- [Storybook para Next.js](https://storybook.js.org/docs/nextjs)
- [Controles y ArgTypes](https://storybook.js.org/docs/essentials/controls)
- [Decoradores](https://storybook.js.org/docs/writing-stories/decorators)

## ✨ Próximos pasos

Para ampliar Storybook, puedes:

1. **Agregar más stories** para componentes que faltan
2. **Añadir tests de interacción** con @storybook/test
3. **Configurar Chromatic** para testing visual automático
4. **Agregar más addons** como accessibility checker
5. **Documentar casos de uso complejos** con composition stories

¡Storybook está listo para usar! 🎉

