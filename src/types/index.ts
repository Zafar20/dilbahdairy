export interface IForm {
    name: string;
    phone: string | number;
    email: string
}


export type Lang = 'ru' | 'en' | 'uz';

export interface IContact {
    general_phone_number: string;
    general_email: string;
    
    ru: {
        general_address: string
        general_working_time: string
      },
      en: {
        general_address: string,
        general_working_time: string
      },
      uz: {
        general_address: string
        general_working_time: string
      }
}


export interface IProduct {
  pk: number;
  title: string;
  description: string;
  collection: null | string;
  compound: string;
  image: string;
  images?: []
}

export interface ProductsResponse {
  results: IProduct[];
  count: number;
}