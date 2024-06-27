'use client'
import s from './Product.module.scss'
import Image from 'next/image'
import { useTranslations } from 'next-intl';
import { changetoHttps } from '@/services/api';
import { useState } from 'react';

const ProductId = ({ data }: { data: any }) => {

    const t = useTranslations('DynamicPage');
    
    let url = changetoHttps(data.image)

    const [img, setImg] = useState(url)
    
    const changeIcon = (url: string) => {
        
        setImg(url)
    }

    return (
        <>
            <div className="container">
                <div className={s.box}>
                    <div className={s.box__left}>
                        <div className={s.box__left_block}>
                            {data.images.map((item: any, i: number) => {
                                let url = changetoHttps(item.image)
                               return <div key={i} className={s.box__left_block_item} onClick={() => changeIcon(url)}>
                                    <img src={url} alt="" className={s.box__left_block_item_img} />
                                </div>
                            } 
                            )}
                            
                        </div>
                        <div className={s.box__left_img}>
                            <Image fill  src={img} alt="" className={s.box__left_image} />
                        </div>
                    </div>
                    <div className={s.box__right}>
                        <h2 className={s.box__right_title}> {data.title}</h2>
                        <div className={s.box__right_block}>
                            <p className={s.box__right_text}>
                                {data.description}
                            </p>
                            <div className={s.box__right_grid}>
                                <div className={s.box__right_grid_item}>
                                    <h2 className={s.box__right_grid_item_title}>{t('food_value')}</h2>
                                    <p className={s.box__right_grid_item_text}>{data.food_value}</p>
                                </div>
                                <div className={s.box__right_grid_item}>
                                    <h2 className={s.box__right_grid_item_title}>{t('energy_value')}</h2>
                                    <p className={s.box__right_grid_item_text}>{data.energy_value}</p>
                                </div>
                                <div className={s.box__right_grid_item}>
                                    <h2 className={s.box__right_grid_item_title}>{t('date')}</h2>
                                    <p className={s.box__right_grid_item_text}>{data.date}</p>
                                </div>
                                <div className={s.box__right_grid_item}>
                                    <h2 className={s.box__right_grid_item_title}>{t('weight')}</h2>
                                    <p className={s.box__right_grid_item_text}>{data.weight}</p>
                                </div>
                            </div>
                            <div className={s.box__right_sostav}>
                                <h2 className={s.box__right_sostav_title}>{t('compound')}</h2>
                                <p className={s.box__right_sostav_text}>{data.compound}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductId