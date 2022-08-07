import axios from "axios";

export async function api(id) {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);

  return {
    data,
  };
}

export async function apispecies(id) {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-species/${id}/`
  );

  return {
    data,
  };
}

export async function apievolution(url) {
  const { data } = await axios.get(
    url
  );

  return {
    data,
  };
}
