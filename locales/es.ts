export const es = {
  // General
  app: {
    title: 'Red Social',
    subtitle: 'Conecta con personas de todo el mundo',
    challengeFooter: 'Challenge Técnico - Next.js 15 + Tailwind CSS 4 + Redux',
  },

  // Auth / Login
  auth: {
    login: 'Iniciar Sesión',
    email: 'Correo electrónico',
    password: 'Contraseña',
    emailPlaceholder: 'tu@email.com',
    passwordPlaceholder: 'Tu contraseña',
    loginButton: 'Iniciar Sesión',
    demoCredentials: 'Credenciales de prueba:',
    demoEmail: 'Email: cualquier@email.com',
    demoPassword: 'Contraseña: cualquier contraseña (mínimo 6 caracteres)',
    errors: {
      required: 'Este campo es requerido',
      emailInvalid: 'El correo electrónico no es válido',
      passwordTooShort: 'La contraseña debe tener al menos 6 caracteres',
    },
  },

  // Header
  header: {
    logout: 'Cerrar Sesión',
    appearance: 'Apariencia',
    darkMode: 'Modo Oscuro',
    lightMode: 'Modo Claro',
  },

  // Feed / Posts
  feed: {
    createPost: '¿Qué estás pensando',
    publishButton: 'Publicar',
    addPhoto: 'Agregar foto',
    changePhoto: 'Cambiar foto',
    noPosts: 'No hay publicaciones aún. ¡Sé el primero en publicar!',
    loadingPosts: 'Cargando publicaciones...',
  },

  // Post Actions
  post: {
    like: 'Me gusta',
    liked: 'Te gusta',
    comment: 'Comentar',
    share: 'Compartir',
    favorite: 'Favorito',
    favorited: 'En favoritos',
    likes: 'Me gusta',
    comments: 'Comentarios',
    shares: 'Compartidos',
    favorites: 'Favoritos',
  },

  // Comments
  comments: {
    writeComment: 'Escribe un comentario...',
    commentButton: 'Comentar',
    noComments: 'No hay comentarios aún. ¡Sé el primero en comentar!',
    viewComments: 'Ver comentarios',
    hideComments: 'Ocultar comentarios',
  },

  // Time formatting
  time: {
    justNow: 'Ahora',
    minutesAgo: 'min',
    hoursAgo: 'h',
    daysAgo: 'd',
    weeksAgo: 'sem',
    monthsAgo: 'mes',
    yearsAgo: 'a',
  },

  // Errors
  errors: {
    generic: 'Ha ocurrido un error. Por favor, intenta de nuevo.',
    networkError: 'Error de conexión. Verifica tu internet.',
    sessionExpired: 'Tu sesión ha expirado. Por favor, inicia sesión de nuevo.',
    imageUpload: {
      invalidType: 'Por favor selecciona un archivo de imagen válido',
      tooLarge: 'La imagen es muy grande. Por favor selecciona una imagen menor a 5MB',
    },
  },

  // Buttons
  buttons: {
    cancel: 'Cancelar',
    save: 'Guardar',
    delete: 'Eliminar',
    edit: 'Editar',
    send: 'Enviar',
    close: 'Cerrar',
  },
} as const;

export type Translations = typeof es;

