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



/*function getEvolutions(chain, evolutions = []) {
  if (chain.chain !== undefined) {
    const name = chain.chain.species?.name;
    const id = chain.chain.species?.url.split("/").reverse()[1];
    evolutions.push({ name, id });
  } else {
    const name = chain.species?.name;
    const id = chain.species?.url.split("/").reverse()[1];
    evolutions.push({ name, id });
  }
  console.log(evolutions);
  console.log(chain);

  if (chain?.chain !== undefined) {
    if (chain?.chain.evolves_to.length === 0) return evolutions;
    else return getEvolutions(chain?.chain.evolves_to[0], evolutions);
  } else {
    if (chain.evolves_to.length === 0) return evolutions;
    return getEvolutions(chain?.evolves_to[0], evolutions);
  }
}*/