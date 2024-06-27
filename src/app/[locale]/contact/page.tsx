import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import Map from '@/components/Map/Map'
import Ourcontacts from '@/components/Ourcontacts/Ourcontacts'
import { getContacts } from '@/services/products';
import type { Metadata } from 'next'


export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await import(`../../../../messages/${params.locale}.json`);
  return {
    title: t.Meta.Contact.title,
  };
}






const page = async() => {

  const contacts = await getContacts()
  
  return (
    <div>
    
        <Breadcrumbs/>
        <Map/>
        <Ourcontacts contacts={contacts}/>
    </div>
  )
}

export default page