
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import Ourcontacts from '@/components/Ourcontacts/Ourcontacts'
import Product from '@/components/Product/Product';
import {  getContacts } from '@/services/products';
import type { Metadata } from 'next'






export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await import(`../../../../messages/${params.locale}.json`);
  return {
    title: t.Meta.Alsafi.title,
    description: t.Meta.Alsafi.description,
  };
}





const page = async({ params: {locale} }: { params: { locale: string } }) => {


  const contacts = await getContacts()

  return (
    <div>
      <Breadcrumbs type="more"/>
      <Product  locale={locale} type="alsafi"/>
      <Ourcontacts contacts={contacts}/>
    </div>
  )
}

export default page

