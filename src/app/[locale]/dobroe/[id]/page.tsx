import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Ourcontacts from '@/components/Ourcontacts/Ourcontacts';
import { getContacts, getProductsId } from '@/services/products';
import type { Metadata } from 'next'
import ProductId from '@/components/ProductId/ProductId';




type Props = {
    params: {
        id: number
        locale: string
    }
}

export async function generateMetadata({ params: { id, locale } }: Props): Promise<Metadata> {
    const item = await getProductsId(id, locale, 'dobroe')
    return {
        title: item.title
    }
}






const page = async ({ params: {locale, id} }: { params: { locale: string, id :number } }) => {

    const contacts = await getContacts()

    return (
        <>
            <Breadcrumbs/>
            <ProductId locale={locale} id={id} type="dobroe"/>
            <Ourcontacts contacts={contacts}/>
        </>
    )
}

export default page
