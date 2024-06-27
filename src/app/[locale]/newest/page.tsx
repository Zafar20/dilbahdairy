import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'

import Ourcontacts from '@/components/Ourcontacts/Ourcontacts';
import { getContacts } from '@/services/products';
import type { Metadata } from 'next'
import Product from '@/components/Product/Product';


export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await import(`../../../../messages/${params.locale}.json`);
  return {
    title: t.Header.newest,
  };
}



const page = async({ params: {locale} }: { params: { locale: string } }) => {

  const contacts = await getContacts()

  return (
    <div>
      <Breadcrumbs type="more"/>
      <Product locale={locale} type="newest"/>
      <Ourcontacts contacts={contacts}/>
    </div>
  )
}

export default page