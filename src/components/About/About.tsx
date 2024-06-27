import s from './About.module.scss'
import { useTranslations } from 'next-intl';
 

const About = ({data}: {data: any}) => {
    
    const t = useTranslations('About');
    
  return (
    <>
        <section className={s.about}>
        <div className="container">
            <h2 className={s.about__title}>{t('title')} </h2>
            <div className={s.about__box}>
                {data.map((item: any,i: number) => (
                    <div className={s.about__box_item} key={i}>
                        <p className={s.about__box_item_year}>{item.year}</p>
                        <p className={s.about__box_item_name}>{item.company_name}</p>
                        <h2 className={s.about__box_item_title}>{item.title}</h2>
                        <p className={s.about__box_item_text}>{item.description}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    </section>
    </>
  )
}

export default About