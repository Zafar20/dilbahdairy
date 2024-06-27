'use client'
import { useEffect, useState } from 'react';
import {  usePathname } from 'next/navigation';
import Link from 'next/link';
import s from './Breadcrumbs.module.scss'
import { useTranslations } from 'next-intl';

const Breadcrumbs = ({type}: {type?: string}) => {


    const t = useTranslations('Header');
    const pathname = usePathname()
    const pathSegments = pathname.split('/').filter(Boolean);
    const [title, setTitle] = useState('');

    
    useEffect(() => {
      setTitle(document.title);
    }, []); 
    
    const isNumber = (value: string) => !isNaN(Number(value));

    
    const language = pathSegments[0];
    const adjustedSegments = pathSegments.slice(1);
    
    
    return (
       <div className="container">
      <ul className={s.list}>
        <li key="home">
          <Link className={s.list__link} href="/">{t('main')}/</Link>
        </li>
        {adjustedSegments.map((segment, index) => {
          const path = `/${language}/${adjustedSegments.slice(0, index + 1).join('/')}`;
          const isLastSegment = index === adjustedSegments.length - 1;
          return (
            <li key={index}>
              {!isLastSegment ? (
                <Link href={path} className={s.list__link}>
                  {t(segment) || segment}
                </Link>
              ) : (
                <span className={s.list__text}>
                  {isNumber(segment) ? title : t(segment) || segment}
                </span>
              )}
              {!isLastSegment && <span>/</span>}
            </li>
          );
        })}
      </ul>
       </div>
     
 
    )
}

export default Breadcrumbs