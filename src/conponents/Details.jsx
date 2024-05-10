import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "../fetchPet";
import breeds from "../fetchBreedList";

const Details = () => {
  const { id } = useParams();
  const x = useQuery(["x", id], breeds);
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return <div>h2xx+-</div>;
  }

  const pet = results.data.pets[0];

  //   return <h2>hi! {id}</h2>;

  return (
    <div>
      <h1>{pet.name}</h1>
      <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
      <button>Adopt {pet.name}</button>
      <p>{pet.description}</p>
    </div>
  );
};

export default Details;
