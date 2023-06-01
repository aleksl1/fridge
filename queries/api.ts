import { FruitData } from "./useFruits";

const endpoints = {
  fruits: "https://pokeapi.co/api/v2/ability/?limit=20&offset=20"
}

export const getFruitsData = async ():Promise<FruitData[]> => {
  const response = await fetch(endpoints.fruits)
  const data: FruitData[] = await response.json()
  return data;
}