import { useQuery } from "@tanstack/react-query";
import { PlacesResponse } from "../types";
import api from "./api";

const getPlaces = () => {
  return useQuery({
    queryKey: ["places"],
    queryFn: () =>
      api.get<PlacesResponse>("/places").then((res) => res.data.places),
  });
};
export default getPlaces;
