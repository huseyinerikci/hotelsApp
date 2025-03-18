import { FC } from "react";
import getPlaces from "../../utils/service";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Card from "../../components/card";
const List: FC = () => {
  const { data, isLoading, error, refetch } = getPlaces();

  if (isLoading) return <Loader />;
  if (error) return <Error message={error.message} onRetry={refetch} />;
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold">Locations near you</h1>
      <div className="grid gap-5 mt-5">
        {data?.map((place) => (
          <Card place={place} key={place.id} />
        ))}
      </div>
    </div>
  );
};

export default List;
