import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { FeedPageClient } from './FeedPageClient';
import { mockPosts } from '@/data/mockData';

export const metadata = {
  title: 'Feed - Red Social',
  description: 'Explora las últimas publicaciones de la comunidad',
};

export default async function FeedPage() {
  // SSR: Verificar autenticación
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  // SSR: Cargar datos iniciales
  const initialPosts = mockPosts;

  return (
    <FeedPageClient
      session={session}
      initialPosts={initialPosts}
    />
  );
}

