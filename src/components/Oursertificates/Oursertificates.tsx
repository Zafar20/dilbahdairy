import React from 'react'
import s from './Oursertificates.module.scss'
import OursertificatesItem from './OursertificatesItem'
import { useTranslations } from 'next-intl';





const Oursertificates = ({data}: {data: any}) => {
  
  const t = useTranslations('Oursertificates');

  
  return (
    <section className={s.oursertificates}>
        <div className="container">
            <div className={s.oursertificates__box}>
                <h2 className={s.oursertificates__box_title}>{t('title')} </h2>
                <div className={s.oursertificates__box_list}>
                  {data.results.map((el: any) => (
                   <OursertificatesItem
                    el={el}
                    key={el}
                   />
                  ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Oursertificates