'use client'
import LocalSwitcher from '../local-switcher'
import s from './Header.module.scss'
import Image from 'next/image'
import useHoverEffect from '@/hooks/useHoverEffect'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl';
import useTranslatedLinks from '@/hooks/useTranslatedLinks'
import {  useState, useRef } from 'react'



const Header = () => {

  const t = useTranslations('Header');
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHoverEffect(); 
  let { links } = useTranslatedLinks()
  const [burger, setBurger] = useState(false)
  const headerLeft = useRef<HTMLDivElement>(null)
  
  return (
    <>
      <header className={s.header}>
        <div className="container justify-between h100">
        <Link href="/"  className={s.logo}>
          <Image src="/images/logo.svg" alt="logo"  width={45} height={45}/>
          <div className={s.logo__info}>
            <h2 className={s.logo__info_title}>Dilbah Dairy</h2>
            <p className={s.logo__info_description}>{t('logoText')}</p>
          </div>  
        </Link>
        <div  onClick={() => setBurger(!burger)} className={`${s.header__btn} ${burger ? s.active : ''}`}>
          <div  className={s.header__btn_line}></div>
        </div>
        <div ref={headerLeft} className={`${s.header__left} ${burger ? `${s.active}` : ''}`}>
        <ul className={s.header__list}  onMouseLeave={handleMouseLeave}>
          {links.map((link) => {
          return <li key={link.name}   onMouseEnter={() => handleMouseEnter(link.name)} className="active">
            <Link 
              href={link.url}
              className={s.header__list_link}
              onClick={(e: any) => {
                if (link.name === t('products')) {
                  e.preventDefault(); // блокируем стандартное действие ссылки (переход)
                } else {
                  setBurger(false); // закрываем бургер-меню только для других ссылок
                }
              }}
            >
              {link.name}
            </Link>
              {link.name == t('products') && isHovered && (
              <ul className={s.header__list_more}>
                {link.more?.map((el,i) => (
                  <li key={i}>
                    <Link 
                      href={el.url} 
                      className={s.header__list_more_link}
                      onClick={() => setBurger(false)}
                    >
                      {el.name}
                      </Link>
                  </li>
                ))}
              </ul>
          )}
        </li>
           })}
        </ul>
          <LocalSwitcher/>
        </div>
   
        </div>
      </header>
    </>
  )
}

export default Header