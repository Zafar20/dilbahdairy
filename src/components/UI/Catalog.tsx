import s from './Catalog.module.scss'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl';

const Catalog = () => {
    
    const t = useTranslations('Catalog');
 
  return (
    <>
    <a href="/catalog.pdf" download className={s.catalog}>
        {t('title')}
    </a>
    </>
  )
}

export default Catalog