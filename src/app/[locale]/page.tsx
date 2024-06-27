
import Content from '@/components/Content/Content';
import Form from '@/components/Form/Form';
import Newgoods from '@/components/Newgoods/Newgoods';
import Ourcontacts from '@/components/Ourcontacts/Ourcontacts';
import Ourgoods from '@/components/Ourgoods/Ourgoods';
import Partners from '@/components/Partners/Partners';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getContacts,  getPartnersImages, getProducts, getSliderImages } from '@/services/products';





export default async function Home({ params: {locale} }: { params: { locale: string } }) {

  let partnersImages = await getPartnersImages()
  let products = await getProducts(locale,'newest')
  let contacts = await getContacts()
  let slides = await getSliderImages()

  return (
    <>
      <ToastContainer />
      <Content slides={slides} contacts={contacts}/>
      <Newgoods products={products}/>
      <Form/>
      <Partners images={partnersImages}/>
      <Ourgoods/>
      <Ourcontacts contacts={contacts}/>
      
    </>
  
  );
}
