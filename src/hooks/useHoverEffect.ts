'use client'
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const useHoverEffect = () => {
  const [isHovered, setIsHovered] = useState(false);
  const t = useTranslations('Header')

  const handleMouseEnter = (name: string) => {
      if(name == t('products')) {
        setIsHovered(true);
      }
   
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return {
    isHovered,
    handleMouseEnter,
    handleMouseLeave
  };
};

export default useHoverEffect;
