import { FC } from "react";
import { getPlaces } from "../../utils/service";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Card from "../../components/card";
import { useSearchParams } from "react-router-dom";
const List: FC = () => {
  const [searchParams] = useSearchParams();
  const paramsObj = Object.fromEntries(searchParams.entries());
  const { data, isLoading, error, refetch } = getPlaces(paramsObj);

  if (isLoading) return <Loader />;
  if (error) return <Error message={error.message} onRetry={refetch} />;
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold">Yakınınızdaki Lokasyonlar</h1>
      <div className="grid gap-5 mt-5">
        {data?.length === 0 ? (
          <div className="text-center bg-blue-600 text-2xl font-semibold my-20 text-white p-5 rounded-md w-[50%] mx-auto">
            Herhangi bir konaklama bulunamadı
          </div>
        ) : (
          data?.map((place) => <Card place={place} key={place.id} />)
        )}
      </div>
    </div>
  );
};

export default List;
