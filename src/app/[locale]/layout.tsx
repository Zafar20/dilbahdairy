import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './global.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { getContacts } from '@/services/products';
import Catalog from '@/components/UI/Catalog';




const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin']
});

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await import(`../../../messages/${params.locale}.json`);
  return {
    title: t.Meta.Home.title,
    description: t.Meta.Home.description,
    icons: {
      icon: '/icon.png', 
    },
  };
}



interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}




export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {



  const messages = await getMessages();
  const contacts  = await getContacts()

  return (
    <html lang={locale}>
       <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={montserrat.className}>
        <NextIntlClientProvider messages={messages} >
            <div className='wrapper'>
              <Header />
                <main className="main">{children}</main>
               <Footer contacts={contacts}/>
               <Catalog/>
            </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
