import s from './Ourcontacts.module.scss'
import { location, time, phone, mail } from '@/utils/images'
import { useTranslations } from 'next-intl';
import{ useLocale } from 'next-intl';
import {  Lang } from '@/types';
import Image from 'next/image';


const Ourcontacts = ({contacts}: {contacts: any}) => {
    
    const t = useTranslations('Ourcontacts');
    const lang: Lang = useLocale() as Lang; // Приведение useLocale к типу Lang

    return (
        <section className={s.ourcontacts}>
            <div className="container">
                <div className={s.ourcontacts__box}>
                    <h2 className={s.ourcontacts__box_title}>{t('title')}</h2>
                         <div className={s.ourcontacts__box_list}>
                         <div className={s.ourcontacts__box_item}>
                             <div className={s.ourcontacts__box_item_img}>
                                 <Image width={20} height={20} src={phone.src} alt="" />
                             </div>
                             <a href={`tel:${contacts.general_phone_number}`} className={s.ourcontacts__box_item_text}>{contacts.general_phone_number}</a>
                         </div>
                         <div className={s.ourcontacts__box_item}>
                             <div className={s.ourcontacts__box_item_img}>
                                 <Image  width={20} height={20} src={mail.src} alt="" />
                             </div>
                             <a href={`mailto:${contacts.general_email}`} className={s.ourcontacts__box_item_text}>{contacts.general_email}</a>
                         </div>
                         <div className={s.ourcontacts__box_item}>
                             <div className={s.ourcontacts__box_item_img}>
                                 <Image  width={20} height={20} src={location.src} alt="" />
                             </div>
                             <p className={s.ourcontacts__box_item_text}>{contacts[lang].general_address}</p>
                         </div>
                         <div className={s.ourcontacts__box_item}>
                             <div className={s.ourcontacts__box_item_img}>
                                 <Image  width={20} height={20} src={time.src} alt="" />
                             </div>
                             <p className={s.ourcontacts__box_item_text}>{contacts[lang].general_working_time}</p>
                         </div>
                     </div>    
                </div>
            </div>
        </section>
    )
}

export default Ourcontacts