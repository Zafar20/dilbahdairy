import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import Ourcontacts from '@/components/Ourcontacts/Ourcontacts';
import Oursertificates from '@/components/Oursertificates/Oursertificates'
import { getCertificates, getContacts } from '@/services/products';
import type { Metadata } from 'next'


export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await import(`../../../../messages/${params.locale}.json`);
  return {
    title: t.Meta.Sertificates.title,
  };
}




const page = async() => {

  const data = await getCertificates()
  const contacts = await getContacts()
  return (
    <div>
        <Breadcrumbs/>
        <Oursertificates data={data}/>
        <Ourcontacts contacts={contacts} />
    </div>
  )
}

export default page