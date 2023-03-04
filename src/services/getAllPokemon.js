import axios from "axios";

export const gatAllPokemon = (offset) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=6&offset=${offset}`)
      .then((data) => resolve(data?.data))
      .catch((err) => reject(err));
  });
};

export const getPokemon = (url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((data) => resolve(data?.data))
      .catch((err) => reject(err));
  });
};
