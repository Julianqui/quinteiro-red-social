'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Avatar, Button, Textarea } from '@/components/atoms';
import { IUser } from '@/interfaces';
import { t } from '@/lib/i18n';

interface ICreatePostFormProps {
  currentUser: IUser;
  onSubmit: (content: string, mediaUrl?: string) => void;
  className?: string;
}

export const CreatePostForm: React.FC<ICreatePostFormProps> = ({
  currentUser,
  onSubmit,
  className = '',
}) => {
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert(t('errors.imageUpload.invalidType'));
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert(t('errors.imageUpload.tooLarge'));
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImageFile(result);
        setImagePreview(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content, imageFile || undefined);
      setContent('');
      setImageFile(null);
      setImagePreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-4 ${className}`}>
      <div className="flex gap-3">
        <Avatar
          src={currentUser.avatar}
          alt={currentUser.name}
          size="md"
          className="hidden sm:block"
        />
        <div className="flex-1">
            <Textarea
              id="post-content"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={`${t('feed.createPost')}, ${currentUser.name.split(' ')[0]}?`}
              rows={3}
              className="mb-2"
            />
          
          {imagePreview && (
            <div className="relative mb-2 rounded-lg overflow-hidden">
              <Image
                src={imagePreview}
                alt="Preview"
                width={400}
                height={300}
                className="w-full h-auto max-h-64 object-cover"
              />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors cursor-pointer"
          >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
ƒ              {imagePreview ? t('feed.changePhoto') : t('feed.addPhoto')}
            </label>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="sm"
            disabled={!content.trim()}
          >
            {t('feed.publishButton')}
          </Button>
      </div>
    </form>
  );
};

