import About from '@/components/About/About';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import Ourcontacts from '@/components/Ourcontacts/Ourcontacts';
import { getAboutData, getContacts } from '@/services/products';
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await import(`../../../../messages/${params.locale}.json`);
  return {
    title: t.Meta.About.title,
    description: t.Meta.About.description,
  };
}




const page = async({ params: {locale} }: { params: { locale: string } }) => {

  const data = await getAboutData(locale)
  const contacts = await getContacts()

  return (
    <>
    <div>
      <Breadcrumbs/>
      <About data={data}/>
      <Ourcontacts contacts={contacts}/>
    </div>
    </>
    
  )
}

export default page

