'use client'
import s from './Product.module.scss'
import { useTranslations } from 'next-intl';
// import BtnMore from '../UI/btnMore';
import Pagination from '../Pagination/Pagination';
import { useEffect, useState } from 'react';

import {  ProductsResponse } from '@/types';
import ProductItem from './ProductItem';
import { getProducts } from '@/services/products';





const Product = ({ locale, type}: { locale: string, type: string}) => {

    const t = useTranslations(`${type}`);
    const [products, setProducts] = useState<ProductsResponse | null>(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [limit, setLimit] = useState(15)
    const [skip, setSkip] = useState(0)
    


    const getProductsApi = async() => {
        let data = await getProducts(locale,type, limit, skip)
        setProducts(data)
    }

    useEffect(() => {
        getProductsApi()
    }, [currentPage])


    const onChangePage = (num: number) => {
        setCurrentPage(num)
        setSkip(num * limit - limit)
        window.scrollTo(0,0)
      }
    
    
  return (
    <section className={s.product}>
    <div className="container">
        <div className={s.product__box}>
            <h2 className={s.product__title}>{t('title')}</h2>
            <div className={s.product__list}>
                {products && products.results.map((item: any) => (
                    <ProductItem
                        item={item}
                        key={item.pk}
                        type={type}
                    />
                ))}
            </div>
        </div>
        {products && products.count > 15 && <Pagination limit={limit} totalCount={products.count} currentPage={currentPage} onChangePage={onChangePage}/>}
    </div>
</section>
  )
}

export default Product