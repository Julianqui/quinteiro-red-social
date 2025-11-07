'use client';

import React, { useState } from 'react';
import { Input, Button } from '@/components/atoms';
import { t } from '@/lib/i18n';

interface ILoginFormProps {
  onSubmit: (email: string, password: string) => void;
  loading?: boolean;
  error?: string;
  className?: string;
}

export const LoginForm: React.FC<ILoginFormProps> = ({
  onSubmit,
  loading = false,
  error,
  className = '',
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError(t('auth.errors.required'));
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError(t('auth.errors.emailInvalid'));
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = (password: string): boolean => {
    if (!password) {
      setPasswordError(t('auth.errors.required'));
      return false;
    }
    if (password.length < 6) {
      setPasswordError(t('auth.errors.passwordTooShort'));
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (isEmailValid && isPasswordValid) {
      onSubmit(email, password);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-4 ${className}`}>
      <Input
        id="email"
        name="email"
        type="email"
        label={t('auth.email')}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (emailError) validateEmail(e.target.value);
        }}
        onBlur={() => validateEmail(email)}
        placeholder={t('auth.emailPlaceholder')}
        error={emailError}
        required
        disabled={loading}
      />

      <Input
        id="password"
        name="password"
        type="password"
        label={t('auth.password')}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          if (passwordError) validatePassword(e.target.value);
        }}
        onBlur={() => validatePassword(password)}
        placeholder={t('auth.passwordPlaceholder')}
        error={passwordError}
        required
        disabled={loading}
      />

      {error && (
        <div className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-3 rounded-lg">
          {error}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        fullWidth
        disabled={loading}
      >
        {loading ? `${t('auth.loginButton')}...` : t('auth.loginButton')}
      </Button>
    </form>
  );
};

