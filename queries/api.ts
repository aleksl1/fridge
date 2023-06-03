import {FruitData} from "./useFruits";
import {libraryItems} from "../utils/dummyData";

const endpoints = {
  fruits: "https://pokeapi.co/api/v2/ability/?limit=20&offset=20"
}

export const getFruitsData = async ():Promise<FruitData[]> => {
  const response = await fetch(endpoints.fruits)
  return await response.json();
}

export const getDummyProducts = async () => {
  const response = await fetch(endpoints.fruits)
  return libraryItems
}