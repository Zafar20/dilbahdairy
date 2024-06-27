'use client';
import { useState, useEffect } from 'react';
import s from './Content.module.scss';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Lang } from '@/types';
import { changetoHttps } from "@/services/api";

const Content = ({ slides, contacts }: { slides: any, contacts: any }) => {
  const [currentLang, setCurrentLang] = useState<Lang>(useLocale() as Lang);
  const [currentContacts, setCurrentContacts] = useState(contacts[currentLang]);
  const lang: Lang = useLocale() as Lang;

  useEffect(() => {
    if (lang !== currentLang) {
      setCurrentLang(lang);
      setCurrentContacts(contacts[lang]);
    }
  }, [useLocale, contacts, currentLang]);

  return (
    <section className={s.content}>
      {slides.map((slide: any, i: number) => {
        let url = changetoHttps(slide.desktop_image)
        return  slide.desktop_image && (
          <Image
            key={i}
            priority
            fill
            src={url}
            alt=""
            className={s.content__img}
          />
        )
      }

      )}
      <div className="container h100">
        <div className={s.content__block}>
          <h1 className={s.content__block_title}>{currentContacts.title}</h1>
          <p className={s.content__block_text}>{currentContacts.text}</p>
          <p className={s.content__block_slogan}>{currentContacts.slogan}</p>
        </div>
      </div>
    </section>
  );
}

export default Content;
