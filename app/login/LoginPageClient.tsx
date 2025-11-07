'use client';

import React, { useState, useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { LoginForm } from '@/components/molecules';
import { t } from '@/lib/i18n';

export const LoginPageClient: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Limpiar localStorage al montar el componente de login
  useEffect(() => {
    try {
      // Limpiar el estado persistido anterior
      localStorage.removeItem('persist:root');
    } catch (error) {
      console.error('Error clearing localStorage on login mount:', error);
    }
  }, []);

  const handleCredentialsLogin = async (email: string, password: string) => {
    setLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError(t('errors.generic'));
      } else {
        router.push('/feed');
        router.refresh();
      }
      } catch {
        setError(t('errors.generic'));
      } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full mb-4">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">{t('app.title')}</h1>
          <p className="text-gray-600 dark:text-gray-400">{t('app.subtitle')}</p>
        </div>

        {/* Login Card */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">{t('auth.login')}</h2>

          {/* Email/Password Form */}
          <LoginForm
            onSubmit={handleCredentialsLogin}
            loading={loading}
            error={error}
          />

          {/* Demo credentials info */}
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-300 font-medium mb-1">{t('auth.demoCredentials')}</p>
            <p className="text-xs text-blue-700 dark:text-blue-400">{t('auth.demoEmail')}</p>
            <p className="text-xs text-blue-700 dark:text-blue-400">{t('auth.demoPassword')}</p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          {t('app.challengeFooter')}
        </p>
      </div>
    </div>
  );
};

