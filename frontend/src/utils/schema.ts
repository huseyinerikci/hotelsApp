import * as yup from "yup";

const nameRegex = /^[A-Za-z][A-Za-z0-9\s]*$/;
const locationRegex = /^[A-Za-z\s]+$/;

export const placeSchema = yup.object().shape({
  name: yup
    .string()
    .required("Başlık zorunludur")
    .matches(nameRegex, "Başlık özel karakterler içeremez"),
  location: yup
    .string()
    .required("Konum zorunludur")
    .min(3, "Konum en az 3 karakter olmalıdır")
    .matches(locationRegex, "Konum sadece harf karakterleri içerir"),
  address: yup
    .string()
    .required("Adres zorunludur")
    .min(3, "Adres en az 3 karakter olmalıdır"),
  description: yup
    .string()
    .required("Açıklama zorunludur")
    .min(10, "Açıklama en az 10 karakter olmalıdır"),
  amenities: yup.string().required("Özellikler zorunludur"),
  rating: yup
    .number()
    .required("Rating zorunludur")
    .min(1, "Puan 1-5 arası olmalıdır")
    .max(5, "Puan 1-5 arası olmalıdır"),
  price_per_night: yup
    .number()
    .required("Fiyat zorunludur")
    .min(20, "Fiyat 20-1000 arası olmalıdır")
    .max(1000, "Fiyat 20-1000 arası olmalıdır"),
  availability: yup.boolean().default(false),
});
