# 🚀 Deployment a Vercel

Guía completa para deployar la aplicación en Vercel.

## 📋 Requisitos Previos

1. Cuenta en [Vercel](https://vercel.com)
2. Proyecto conectado a tu repositorio Git

## 🔧 Variables de Entorno Requeridas

Debes configurar estas variables de entorno en Vercel:

### 1. NEXTAUTH_SECRET

Es **obligatoria** para que NextAuth funcione en producción.

**Generar un secret:**

```bash
# Opción 1: Con OpenSSL
openssl rand -base64 32

# Opción 2: Online
# Visita: https://generate-secret.vercel.app/32
```

**Configurar en Vercel:**

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega:
   - **Name**: `NEXTAUTH_SECRET`
   - **Value**: El secret generado
   - **Environment**: Production, Preview, Development

### 2. NEXTAUTH_URL

La URL de tu aplicación en producción.

**Configurar en Vercel:**

1. Settings → Environment Variables
2. Agrega:
   - **Name**: `NEXTAUTH_URL`
   - **Value**: `https://tu-app.vercel.app` (reemplaza con tu URL)
   - **Environment**: Production, Preview

## 📝 Pasos para Deployar

### Opción 1: Desde la CLI de Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy a producción
vercel --prod
```

### Opción 2: Desde GitHub (Recomendado)

1. **Conecta tu repositorio:**
   - Ve a [Vercel Dashboard](https://vercel.com/dashboard)
   - Click en "Add New" → "Project"
   - Importa tu repositorio de GitHub

2. **Configura las variables de entorno:**
   - En la sección "Environment Variables"
   - Agrega `NEXTAUTH_SECRET` (generado con `openssl rand -base64 32`)
   - Agrega `NEXTAUTH_URL` con tu URL de Vercel

3. **Deploy:**
   - Click en "Deploy"
   - Vercel automáticamente detectará Next.js y lo configurará

## ⚙️ Configuración de Build

Vercel detecta automáticamente Next.js, pero puedes verificar:

**Framework Preset:** Next.js

**Build Command:**
```bash
npm run build
```

**Output Directory:**
```
.next
```

**Install Command:**
```bash
npm install
```

## 🔍 Verificación Post-Deployment

Después del deployment, verifica:

### 1. ✅ La página de login se carga

Visita `https://tu-app.vercel.app`

Deberías ver la página de login, no la página por defecto de Next.js.

### 2. ✅ Puedes iniciar sesión

Usa cualquier email y contraseña (mínimo 6 caracteres):
- **Email**: `test@example.com`
- **Password**: `123456`

### 3. ✅ El feed funciona

Después de login, deberías ver el feed con posts.

### 4. ✅ Redux Persist funciona

La sesión debería persistir al recargar la página.

## 🐛 Solución de Problemas

### Problema: Se ve la página por defecto de Next.js

**Causa:** Variables de entorno no configuradas o build incorrecto.

**Solución:**

1. **Verifica las variables de entorno:**
   ```
   Settings → Environment Variables
   ```
   
   Debe tener:
   - `NEXTAUTH_SECRET`: Un string de 32 caracteres base64
   - `NEXTAUTH_URL`: Tu URL de Vercel

2. **Redeploy después de agregar variables:**
   ```
   Deployments → Click en los "..." → Redeploy
   ```

3. **Verifica los logs:**
   ```
   Deployments → Click en tu deployment → Function Logs
   ```

### Problema: Error 500 al hacer login

**Causa:** `NEXTAUTH_SECRET` no está configurado.

**Solución:**

```bash
# Genera un secret
openssl rand -base64 32

# Agrégalo en Vercel Settings → Environment Variables
```

### Problema: Redirect loop infinito

**Causa:** `NEXTAUTH_URL` apunta a la URL incorrecta.

**Solución:**

1. Ve a Settings → Environment Variables
2. Edita `NEXTAUTH_URL`
3. Asegúrate que sea: `https://tu-dominio.vercel.app` (SIN trailing slash)
4. Redeploy

### Problema: "Module not found" en producción

**Causa:** Dependencias no instaladas o imports incorrectos.

**Solución:**

1. **Verifica que todas las dependencias estén en `package.json`:**
   ```bash
   npm install
   ```

2. **Verifica los imports:**
   Asegúrate de usar el alias `@/` correctamente.

3. **Limpia y redeploy:**
   ```bash
   rm -rf .next node_modules
   npm install
   npm run build
   vercel --prod
   ```

## 📊 Configuración Recomendada en Vercel

### Environment Variables

| Variable | Value | Environment |
|----------|-------|-------------|
| `NEXTAUTH_SECRET` | `[generated-secret]` | Production, Preview, Development |
| `NEXTAUTH_URL` | `https://tu-app.vercel.app` | Production, Preview |

### Build & Development Settings

```
Node.js Version: 20.x
Framework: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Development Command: npm run dev
```

## 🌐 Dominios Personalizados

Si quieres usar un dominio personalizado:

1. **Agrega el dominio:**
   - Settings → Domains
   - Agrega tu dominio

2. **Actualiza NEXTAUTH_URL:**
   - Settings → Environment Variables
   - Cambia `NEXTAUTH_URL` a tu dominio personalizado
   - Redeploy

## 🔄 Redeploys Automáticos

Vercel automáticamente redeploy cuando:
- Haces push a la rama principal (main/master)
- Abres un Pull Request (crea un Preview deployment)

### Configurar rama de producción:

1. Settings → Git
2. Production Branch: `main` (o tu rama principal)

## 📈 Monitoring y Analytics

Vercel incluye analytics gratis:

1. **Analytics:**
   - Ve a la pestaña "Analytics"
   - Métricas de rendimiento y tráfico

2. **Function Logs:**
   - Deployments → Click en deployment → Function Logs
   - Ver logs de las API routes

3. **Speed Insights:**
   - Settings → Speed Insights
   - Enable para ver métricas de rendimiento

## ✅ Checklist de Deployment

Antes de hacer deploy a producción:

- [ ] Variables de entorno configuradas (`NEXTAUTH_SECRET`, `NEXTAUTH_URL`)
- [ ] Build local exitoso (`npm run build`)
- [ ] Tests pasando (`npm test`)
- [ ] Storybook build exitoso (`npm run build-storybook`)
- [ ] Sin errores de linting (`npm run lint`)
- [ ] Imágenes optimizadas
- [ ] README actualizado
- [ ] `.env.local` NO committeado

## 🎯 Comandos Útiles

```bash
# Ver deployments
vercel ls

# Ver logs de producción
vercel logs

# Promover preview a producción
vercel promote

# Cancelar deployment
vercel cancel

# Ver información del proyecto
vercel inspect
```

## 🔗 Enlaces Útiles

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Vercel CLI Docs](https://vercel.com/docs/cli)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Environment Variables](https://vercel.com/docs/environment-variables)

---

## 📝 Ejemplo de .env.local (Local Development)

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
# .env.local (NO COMMITEAR)
NEXTAUTH_SECRET=tu-secret-para-desarrollo
NEXTAUTH_URL=http://localhost:3000
```

**IMPORTANTE:** Este archivo NO debe ser committeado a Git (ya está en `.gitignore`).

---

**¿Problemas con el deployment?** Revisa los logs en Vercel o contacta al equipo de desarrollo.

