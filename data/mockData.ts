import { IUser, IPost, IComment } from '@/interfaces';

export const mockUsers: IUser[] = [
  {
    id: '1',
    name: 'Julian Quinteiro',
    email: 'julian@example.com',
    username: 'julianq',
    avatar: 'https://i.pravatar.cc/150?img=1',
    bio: 'Desarrollador Full Stack apasionado por la tecnología'
  },
  {
    id: '2',
    name: 'María García',
    email: 'maria@example.com',
    username: 'mariag',
    avatar: 'https://i.pravatar.cc/150?img=5',
    bio: 'UX Designer y amante del café'
  },
  {
    id: '3',
    name: 'Carlos Rodríguez',
    email: 'carlos@example.com',
    username: 'carlosr',
    avatar: 'https://i.pravatar.cc/150?img=12',
    bio: 'DevOps Engineer | Cloud enthusiast'
  },
  {
    id: '4',
    name: 'Ana Martínez',
    email: 'ana@example.com',
    username: 'anam',
    avatar: 'https://i.pravatar.cc/150?img=20',
    bio: 'Product Manager en Tech Startup'
  }
];

export const mockComments: IComment[] = [
  {
    id: 'c1',
    author: mockUsers[1],
    content: '¡Me encanta este contenido! Muy útil 👏',
    postId: 'p1',
    createdAt: new Date('2025-11-07T10:30:00').toISOString(),
    likes: ['2', '3']
  },
  {
    id: 'c2',
    author: mockUsers[2],
    content: 'Totalmente de acuerdo, excelente punto de vista.',
    postId: 'p1',
    createdAt: new Date('2025-11-07T11:00:00').toISOString(),
    likes: ['1']
  },
  {
    id: 'c3',
    author: mockUsers[3],
    content: '¿Podrías compartir más información sobre esto?',
    postId: 'p2',
    createdAt: new Date('2025-11-07T09:45:00').toISOString(),
    likes: []
  },
  {
    id: 'c4',
    author: mockUsers[0],
    content: 'Gran iniciativa! Espero ver más contenido así.',
    postId: 'p3',
    createdAt: new Date('2025-11-07T08:20:00').toISOString(),
    likes: ['2', '3', '4']
  }
];

export const mockPosts: IPost[] = [
  {
    id: 'p1',
    author: mockUsers[0],
    content: '¡Hola a todos! Estoy emocionado de compartir mi último proyecto construido con Next.js 15 y Tailwind CSS 4. Las nuevas características son increíbles 🚀',
    mediaUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    mediaType: 'image',
    createdAt: new Date('2025-11-07T09:00:00').toISOString(),
    likes: ['2', '3', '4'],
    favorites: ['2', '4'],
    shares: 5,
    comments: [mockComments[0], mockComments[1]]
  },
  {
    id: 'p2',
    author: mockUsers[1],
    content: 'Acabo de terminar un diseño increíble para una nueva app. El diseño centrado en el usuario es clave para el éxito de cualquier producto 🎨✨',
    mediaUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    mediaType: 'image',
    createdAt: new Date('2025-11-07T08:30:00').toISOString(),
    likes: ['1', '3', '4'],
    favorites: ['1'],
    shares: 3,
    comments: [mockComments[2]]
  },
  {
    id: 'p3',
    author: mockUsers[2],
    content: 'Compartiendo algunos tips de DevOps: La automatización es tu mejor amigo. CI/CD bien implementado puede ahorrar horas de trabajo manual.',
    createdAt: new Date('2025-11-07T07:15:00').toISOString(),
    likes: ['1', '2', '4'],
    favorites: ['1', '2', '3'],
    shares: 8,
    comments: [mockComments[3]]
  },
  {
    id: 'p4',
    author: mockUsers[3],
    content: 'Nueva semana, nuevos desafíos! 💪 Recordatorio: la clave del éxito está en la consistencia y el aprendizaje continuo.',
    createdAt: new Date('2025-11-06T18:45:00').toISOString(),
    likes: ['1', '2'],
    favorites: ['2'],
    shares: 2,
    comments: []
  },
  {
    id: 'p5',
    author: mockUsers[0],
    content: '¿Alguien más está experimentando con las nuevas características de React 19? Server Components han cambiado completamente mi forma de pensar sobre la arquitectura.',
    mediaUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    mediaType: 'image',
    createdAt: new Date('2025-11-06T16:20:00').toISOString(),
    likes: ['3', '4'],
    favorites: [],
    shares: 1,
    comments: []
  }
];

