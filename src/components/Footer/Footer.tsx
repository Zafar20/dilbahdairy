'use client'

import s from './Footer.module.scss'
import { Link } from '@/navigation'
import Image from 'next/image'
import { fb, insta, number, tw, vk, youtube, arrowUp } from '@/utils/images'
import useHoverEffect from '@/hooks/useHoverEffect'
import { useTranslations } from 'next-intl';
import useTranslatedLinks from '@/hooks/useTranslatedLinks'
import { useLocale } from 'next-intl';



let socials = [
  {img: fb, url: 'https://www.facebook.com/dobroe.urto?mibextid=LQQJ4d&rdid=wYIDvg6GhOEaXDb9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fuo8yWWoUpQ49pUac%2F%3Fmibextid%3DLQQJ4d'},
  {img: vk, url: '#'},
  {img: tw, url: '#'},
  {img: insta, url: 'https://www.instagram.com/alsafi_uzbekistan?igsh=MmhiNmV6YTQ1MDN1'},
  {img: youtube, url: '#'},
]

const Footer = ({contacts}: {contacts: any}) => {


  const t = useTranslations('Header');
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHoverEffect(); 
  let { links } = useTranslatedLinks()
  const lang = useLocale();

  const goUp = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  return (
    <>
      <footer className={s.footer}>
        <div className={s.footer__up} onClick={goUp}>
          <Image src={arrowUp} alt=""/>
        </div>
        <div className="container">
          <div className={s.footer__box}>
            
         
        <Link href="/" className={s.logo}>
          <Image src="/images/logo.svg" alt="logo"  width={45} height={45}/>
          <div className={s.logo__info}>
            <h2 className={s.logo__info_title}>Dilbah Dairy</h2>
            <p className={s.logo__info_description}>{t('logoText')}</p>
          </div>  
        </Link>
        <ul className={s.footer__list}  onMouseLeave={handleMouseLeave}>
          {links.map((link) => {
          return <li key={link.name}   onMouseEnter={() => handleMouseEnter(link.name)} className="active">
            <Link 
              href={link.url}
              className={s.footer__list_link}
            >
              {link.name}
            </Link>
              {link.name == t('products') && isHovered && (
              <ul className={s.footer__list_more}>
                {link.more?.map((el,i) => (
                  <li key={i}>
                    <Link href={el.url} className={s.footer__list_more_link}>{el.name}</Link>
                  </li>
                ))}
              </ul>
          )}
        </li>
           })}
        </ul>
        <div className={s.footer__info}>
          <div className={s.footer__info_top}>
            <div className={s.footer__info_top_icon}>
              <Image src={number} alt="" />
            </div>
            <div>
              <p className={s.footer__info_top_time}>{contacts[lang].general_working_time}</p>
              <a href="tel:88000000000" className={s.footer__info_top_phone}>{contacts.general_phone_number}</a>
            </div>
          </div>
          <div className={s.footer__info_bottom}>
           {socials.map((el, i) => (
            <a key={i} href={el.url}  className={s.footer__info_bottom_link}>
              <Image src={el.img} alt="" />
            </a>
           ))}
          </div>
        </div>
        </div>
        </div>
      </footer>
    </>
  )
}

export default Footer