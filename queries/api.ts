const endpoints = {
  fruits: "https://www.fruityvice.com/api/fruit/all"
}

export const getFruitsData = async () => {
  const response = await fetch(endpoints.fruits)
  const data = JSON.stringify(response)
  return data;
}