import React from 'react'
import s from './Ourgoods.module.scss'
import { Link } from '@/navigation'
import { alsafi, dobroe } from '@/utils/images'
import { useTranslations } from 'next-intl';
import Image from 'next/image'

const Ourgoods = () => {
    const t = useTranslations('Ourgoods');
    
    
  return (
    <section className={s.ourgoods}>
        <div className="container">
            <div className={s.ourgoods__box}>
                <h2 className={s.ourgoods__box_title}>{t('title')}</h2>
                <div className={s.ourgoods__box_list}>
                    <Link href="/alsafi" className={s.ourgoods__box_list_link}>
                        <Image  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill src={alsafi.src} alt="" />
                    </Link>
                    <Link href="/dobroe"  className={s.ourgoods__box_list_link}>
                        <Image  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill src={dobroe.src} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Ourgoods