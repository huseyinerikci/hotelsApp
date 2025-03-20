import { useMutation, useQuery } from "@tanstack/react-query";
import { PlaceData, PlaceResponse, PlacesResponse } from "../types";
import api from "./api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const getPlaces = (paramsObj?: any) => {
  return useQuery({
    queryKey: ["places", paramsObj],
    queryFn: () =>
      api
        .get<PlacesResponse>("/places", { params: paramsObj })
        .then((res) => res.data.places),
  });
};
export const createPlace = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["create-place"],
    mutationFn: (body: PlaceData) => api.post("/places", body),
    onSuccess: (res) => {
      toast.success("İlan başarıyla oluşturuldu");
      navigate("/");
    },
    onError: (error) => {
      toast.error("İlan oluşturulurken hata oluştu");
    },
  });
};

export const getPlaceById = (id: string) => {
  return useQuery({
    queryKey: ["place"],
    queryFn: () =>
      api.get<PlaceResponse>(`/place/${id}`).then((res) => res.data.place),
  });
};

export const deletePlace = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["delete-place"],
    mutationFn: (id: number) => api.delete(`/place/${id}`),
    onSuccess: () => {
      toast.success("İlan başarıyla silindi");
      navigate("/");
    },
    onError: (error) => {
      toast.error("İlan silinirken hata oluştu");
    },
  });
};
