import { FC } from "react";
import { useParams } from "react-router-dom";
import { getPlaceById } from "../../utils/service";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Images from "./Images";
import Info from "./Info";
import Overview from "./Overview";
import Button from "./Button";
import Container from "./Container";

const Detail: FC = () => {
  const { id } = useParams();
  const { data, isLoading, error, refetch } = getPlaceById(id as string);

  if (isLoading)
    return (
      <Container>
        <Loader />
      </Container>
    );
  if (error)
    return (
      <Container>
        <Error message={error.message} onRetry={refetch} />
      </Container>
    );
  if (!data) return;
  return (
    <Container>
      <Images image={data.image_url} />
      <Info place={data} />
      <Overview place={data} />
      <Button id={data.id} />
    </Container>
  );
};

export default Detail;
