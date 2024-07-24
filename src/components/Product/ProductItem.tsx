import React from 'react'
import s from './Product.module.scss'
import { Link } from '@/navigation'
import Image from 'next/image'
import { changetoHttps } from "@/services/api"

const ProductItem = ({ item, type }: { item: any, type: string }) => {
  
  let url = changetoHttps(item.image)
  
  return (
    <div className={s.product__item}>
      <div className={s.product__item_img}>
        <Image  priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill src={url} alt="" className={s.product__item_image} />
      </div>
      <div className={s.product__item_info}>
        <h2 className={s.product__item_title}>{item.title}</h2>
        <p className={s.product__item_text}>{item.description}</p>
        <Link href={`/${type}/${item.pk}`} className={s.product__item_link}>Подробнее</Link>
      </div>

    </div>
  )
}

export default ProductItem
