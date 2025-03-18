export interface Place {
  id: string;
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string[];
  price_per_night: number;
  rating: number;
  availability: boolean;
  image_url: string;
}

export interface PlacesResponse {
  message: string;
  places: Place[];
  result: number;
}
