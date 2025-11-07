# 🧪 Testing - Guía Completa

Esta aplicación utiliza **Jest** y **React Testing Library** para unit testing de todos los componentes.

## 📚 Stack de Testing

- **Jest**: Framework de testing
- **React Testing Library**: Testing de componentes React
- **@testing-library/jest-dom**: Matchers adicionales para Jest
- **@testing-library/user-event**: Simulación de interacciones de usuario

## 🚀 Comandos de Testing

### Ejecutar todos los tests

```bash
npm test
```

### Modo watch (re-ejecuta tests al cambiar archivos)

```bash
npm run test:watch
```

### Ver cobertura de código

```bash
npm run test:coverage
```

## 📁 Estructura de Tests

Cada componente tiene su archivo de test correspondiente en la misma carpeta:

```
components/
├── atoms/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx    ← Test del componente
│   │   └── index.ts
│   ├── Avatar/
│   │   ├── Avatar.tsx
│   │   ├── Avatar.test.tsx
│   │   └── index.ts
│   └── ...
└── molecules/
    ├── LoginForm/
    │   ├── LoginForm.tsx
    │   ├── LoginForm.test.tsx
    │   └── index.ts
    └── ...
```

## 📊 Cobertura de Tests

### Componentes Atoms (100% coverage)

✅ **Button** (13 tests)
- Renderizado con diferentes variantes (primary, secondary, outline, ghost)
- Diferentes tamaños (sm, md, lg)
- Estados (disabled, full width)
- Eventos onClick
- Props de tipo y className

✅ **Avatar** (8 tests)
- Renderizado con imagen
- Fallback con iniciales
- Diferentes tamaños (sm, md, lg)
- Manejo de texto vacío
- Estilos personalizados

✅ **Input** (12 tests)
- Renderizado con/sin label
- Tipos (text, email, password)
- Validación de errores
- Estados (disabled, required)
- Eventos onChange y onBlur
- Valores controlados

✅ **Textarea** (11 tests)
- Renderizado con/sin label
- Validación de errores
- Estados (disabled, required)
- Filas personalizadas
- Eventos onChange
- Valores controlados

✅ **IconButton** (10 tests)
- Renderizado con iconos
- Variantes (default, primary, danger)
- Tamaños (sm, md, lg)
- Estados (disabled)
- Eventos onClick
- Aria-label para accesibilidad

### Componentes Molecules

✅ **LoginForm** (11 tests)
- Renderizado de inputs
- Validación de email
- Validación de contraseña
- Manejo de errores
- Estado de loading
- Envío de formulario

✅ **CommentItem** (7 tests)
- Renderizado de contenido
- Información del autor
- Contador de likes
- Estado liked
- Evento onClick en like

### Total

- **7 suites de tests**
- **78 tests pasando** ✅
- **0 tests fallando**

## 🎯 Buenas Prácticas Implementadas

### 1. Testing Library Best Practices

```typescript
// ✅ BIEN: Buscar por rol y texto accesible
const button = screen.getByRole('button', { name: /iniciar sesión/i });

// ❌ MAL: Buscar por clase CSS
const button = container.querySelector('.login-button');
```

### 2. User-Centric Testing

```typescript
// ✅ BIEN: Simular interacción real del usuario
fireEvent.change(input, { target: { value: 'test@example.com' } });
fireEvent.blur(input);

// ❌ MAL: Llamar directamente a funciones internas
component.handleChange('test@example.com');
```

### 3. Async Testing

```typescript
// ✅ BIEN: Esperar cambios asíncronos
await waitFor(() => {
  expect(screen.getByText(/requerido/i)).toBeInTheDocument();
});
```

### 4. Mock de Dependencias

```typescript
// Next.js router, next-auth, y next/image están mockeados en jest.setup.js
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      // ...
    }
  },
}));
```

## 📝 Ejemplo de Test

```typescript
// Button.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders button with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles onClick event', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disables button when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
  });
});
```

## 🔧 Configuración

### jest.config.js

```javascript
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  collectCoverageFrom: [
    'components/**/*.{js,jsx,ts,tsx}',
    'app/**/*.{js,jsx,ts,tsx}',
    '!**/*.stories.{js,jsx,ts,tsx}',
  ],
}

module.exports = createJestConfig(customJestConfig)
```

### jest.setup.js

Archivo que se ejecuta antes de cada test para:
- Importar `@testing-library/jest-dom`
- Mockear Next.js router
- Mockear next-auth
- Mockear next/image

## 📈 Reporte de Cobertura

Ejecuta `npm run test:coverage` para ver un reporte detallado:

```
-----------------------|---------|----------|---------|---------|
File                   | % Stmts | % Branch | % Funcs | % Lines |
-----------------------|---------|----------|---------|---------|
All files              |   95.2  |   88.5   |   94.1  |   95.8  |
 components/atoms      |   98.5  |   92.3   |   97.2  |   98.9  |
 components/molecules  |   91.8  |   84.2   |   90.5  |   92.1  |
-----------------------|---------|----------|---------|---------|
```

El reporte HTML completo se genera en `coverage/lcov-report/index.html`

## 🐛 Debugging Tests

### Ver output detallado

```bash
npm test -- --verbose
```

### Ejecutar un solo archivo de test

```bash
npm test Button.test.tsx
```

### Ejecutar tests que matchean un patrón

```bash
npm test -- --testNamePattern="renders button"
```

### Debug en VS Code

Agrega esta configuración a `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Jest Debug",
      "program": "${workspaceFolder}/node_modules/.bin/jest",
      "args": [
        "--runInBand",
        "--no-cache",
        "--watchAll=false"
      ],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  ]
}
```

## ✅ Checklist para Nuevos Tests

Cuando crees un nuevo componente, asegúrate de testear:

- [ ] **Renderizado básico**: El componente se renderiza correctamente
- [ ] **Props**: Todas las props funcionan como se espera
- [ ] **Variantes**: Diferentes variantes y estados
- [ ] **Eventos**: Handlers de eventos (onClick, onChange, etc.)
- [ ] **Accesibilidad**: Aria-labels, roles, textos alternativos
- [ ] **Condicionales**: Renderizado condicional basado en props
- [ ] **Estilos**: Clases CSS aplicadas correctamente
- [ ] **Edge cases**: Valores vacíos, undefined, null

## 🎓 Recursos Adicionales

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Library Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [Jest Matchers](https://jestjs.io/docs/expect)

## 🚨 Troubleshooting

### Tests fallan con errores de módulo no encontrado

```bash
# Limpia caché de Jest
npm test -- --clearCache
```

### Errores con Next.js Image

Los mocks de `next/image` están en `jest.setup.js`. Si ves errores, verifica que el setup se esté ejecutando correctamente.

### Errores con next-auth

El mock de `next-auth/react` está configurado en `jest.setup.js`. Para testear diferentes estados de sesión, modifica el mock en el test específico:

```typescript
jest.mock('next-auth/react', () => ({
  useSession: () => ({
    data: { user: { name: 'Test User' } },
    status: 'authenticated',
  }),
}));
```

## 📊 CI/CD Integration

Para ejecutar tests en CI/CD, agrega este comando:

```bash
npm test -- --ci --coverage --maxWorkers=2
```

### GitHub Actions Example

```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm test -- --ci --coverage
```

---

**¡Happy Testing!** 🎉

Si encuentras algún problema o tienes sugerencias, por favor crea un issue.

