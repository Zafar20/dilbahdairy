'use client'
import s from './Form.module.scss'
import { useForm } from 'react-hook-form'
import { IForm } from '@/types/index'
import CustomInput from '../UI/CustomInput'
import { formIcon1, formIcon2, formIcon3 } from '@/utils/images'
import { useTranslations } from 'next-intl';
import { toast } from 'react-toastify'
import { sendEmail } from '@/services/products'




const Form = () => {
  
  const t = useTranslations('Form');

  const {
    register, 
    formState: {
      isValid
    },
    handleSubmit, //
    reset,

  } = useForm<IForm>({
    mode: "onBlur"
  })

  const onSubmit = async (data: IForm) => {
    console.log();
    
    
    try {
      await sendEmail(data)
      toast.success('Форма отправлена', {
        position: "top-right",
        autoClose: 1000,
      })  
      console.log('Successfull');
      

    } catch (error: any) {
      console.error(error.message);
      
    }
    reset()
  }






  return (
    <section className={s.form}>
        <h2 className={s.form_title}>{t('title')}</h2>
        <div className={s.form_block}>
        <div className="container">
        <form className={s.form_box} onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            holder={t('name')}
            type="text"
            icon={formIcon1}
            register={register('name', {
              required: true,
            })}
          />
          <CustomInput
            holder={t('number')}
            type="number"
            icon={formIcon2}
            register={register('phone', {
              required: true,
            })}
          />
          <CustomInput
            holder={t('email')}
            type="email"
            icon={formIcon3}
            register={register('email', {
              required: true,
            })}
          />
          <button disabled={!isValid} className={s.form_btn}>{t('btn')}</button>
        </form>
      </div>
        </div>
   
    </section>


  )
}

export default Form