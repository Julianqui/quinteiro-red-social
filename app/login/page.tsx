import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { LoginPageClient } from './LoginPageClient';

export const metadata = {
  title: 'Iniciar Sesión - Red Social',
  description: 'Inicia sesión en tu cuenta de red social',
};

export default async function LoginPage() {
  // SSR: Verificar si el usuario ya está autenticado
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/feed');
  }

  return <LoginPageClient />;
}

