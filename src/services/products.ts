import { fetcher } from "./api"

export async function getPartnersImages() {
  return fetcher("partners/images")
}
export async function getSliderImages() {
  return fetcher("images")
}

export async function getAboutData(locale: string) {
  return fetcher("about/", {
    headers: {
      "Accept-Language": locale,
    },
  })
}

export async function getContacts() {
  return fetcher(`vars/`)
}

export async function getCertificates() {
  return fetcher(`certificates/`)
}

export async function getProducts(
  locale: string,
  type?: string,
  limit?: number,
  offset?: number
) {
  return fetcher(`products/${type}?limit=${limit}&offset=${offset}`, {
    headers: {
      "Accept-Language": locale,
    },
  })
}

export async function getProductsId(id: number, locale: string, type?: string) {
  return fetcher(`products/${type}/${id}`, {
    headers: {
      "Accept-Language": locale,
    },
  })
}

export async function sendEmail(data: any) {
  return fetcher(`send_mail/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Устанавливаем Content-Type
    },
    body: JSON.stringify(data),
  })
}
