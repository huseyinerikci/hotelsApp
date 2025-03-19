export interface Place {
  id: number;
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

export interface PlaceData {
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string;
  rating: string;
  price_per_night: string;
  availability: boolean;
}

export interface PlacesResponse {
  message: string;
  places: Place[];
  result: number;
}

export interface PlaceResponse {
  message: string;
  place: Place;
}
