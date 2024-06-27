import React from 'react'
import s from './Newgoods.module.scss'
import NewsgoodsItem from './NewsgoodsItem'
import { useTranslations } from 'next-intl';

const Newgoods = ({ products }: {products: any}) => {
  
  const t = useTranslations('Newgoods');
  
  return (
    <section className={s.newgoods}>
        <div className="container">
            <div className={s.newgoods__box}>
                <h2 className={s.newgoods__box_title}>{t('title')}</h2>
                <div className={s.newgoods__box_list}>
                  {products.results.map((item: any) => (
                     <NewsgoodsItem
                        key={item.pk}
                        item={item}
                     />
                  ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newgoods