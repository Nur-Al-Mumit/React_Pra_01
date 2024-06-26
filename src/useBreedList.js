import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

// const localCache = {};

export default function useBreedList(animal) {
  // const [breedList, setBreedList] = useState([]);
  // const [status, setStatus] = useState("unloaded");

  // useEffect(() => {
  //   if (!animal) {
  //     setBreedList([]);
  //   } else if (localCache[animal]) {
  //     setBreedList(localCache[animal]);
  //   } else {
  //     requestBreedList();
  //   }

  //   async function requestBreedList() {
  //     setBreedList([]);
  //     setStatus("Loading");

  //     const res = await fetch(
  //       `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  //     );
  //     const json = await res.json();
  //     localCache[animal] = json.breeds || [];
  //     setBreedList(localCache[animal]);
  //     // console.log(localCache[animal]);
  //     setStatus("Loaded");
  //   }
  // }, [animal]);

  // return [breedList, status];
  const results = useQuery(["breeds", animal], fetchBreedList);
  return [results?.data?.breeds ?? [], results.status];
}
