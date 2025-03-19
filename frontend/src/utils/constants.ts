export const sortOptions = [
  { label: "Seçiniz", value: "" },
  { label: "En ucuz", value: "price-asc" },
  { label: "En pahalı", value: "price-desc" },
  { label: "En iyi puan", value: "rating-desc" },
  { label: "En kötü puan", value: "rating-asc" },
];

export const initialValues = {
  name: "",
  location: "",
  address: "",
  description: "",
  price_per_night: "",
  rating: "",
  amenities: "",
  availability: false,
};

export const inputs = [
  { label: "Başlık", name: "name", placeholder: "Seaside Villa" },
  { label: "Lokasyon", name: "location", placeholder: "İstanbul Türkiye" },
  { label: "Adres", name: "address", placeholder: "123 Sokak, No: 123" },
  {
    label: "Açıklama",
    name: "description",
    placeholder: "Deniz manzaralı bir ev",
  },
  { label: "Hizmetler", name: "amenities", placeholder: "Wifi, Park, Havuz" },
  { label: "Gece Fiyatı", name: "price_per_night", placeholder: "$100" },
  { label: "Puan", name: "rating", placeholder: "3.5" },
  {
    label: "Uygunluk (Şuan müsait mi?)",
    name: "availability",
    type: "checkbox",
  },
];
