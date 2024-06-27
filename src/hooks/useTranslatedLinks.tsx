'use client'
import React, { useState } from 'react'
import { useTranslations } from 'next-intl';

const useTranslatedLinks = () => {

    const t = useTranslations('Header')

    let pages = [
        { name: t('main'), url:'/' },
        { 
            name: t('products'),
            url:'/#',
            more: [
                { name: t('dobroe'), url: '/dobroe' },
                { name: t('alsafi'), url: '/alsafi' },
            ]},
        { name: t('about'), url:'/about' },
        { name: t('sertificates'), url:'/sertificates' },
        { name: t('contact'), url:'/contact' },
      ]

    const [links, setlinks] = useState(pages)

      return {
        links
      }
}

export default useTranslatedLinks