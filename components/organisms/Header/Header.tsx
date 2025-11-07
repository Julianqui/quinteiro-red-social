'use client';

import React from 'react';
import { UserDropdown } from '@/components/molecules';
import { IUser } from '@/interfaces';
import { t } from '@/lib/i18n';

interface IHeaderProps {
  user: IUser;
  onLogout: () => void;
  className?: string;
}

export const Header: React.FC<IHeaderProps> = ({ user, onLogout, className = '' }) => {
  return (
    <header className={`bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-500">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
              </svg>
            </div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 hidden sm:block">{t('app.title')}</h1>
          </div>
          <UserDropdown user={user} onLogout={onLogout} />
        </div>
      </div>
    </header>
  );
};

