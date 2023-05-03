//npm init -y
//npm install axios
//node .\testeCEP.js

const axios = require('axios');

async function buscarPokemon(pokemon) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    return response.data;
  } catch (error) {
    throw new Error('Não foi possível obter o Pokemon a partir do nome informado');
  }
}

// Exemplo de uso da função buscarEndereco
buscarPokemon('pikachu')
  .then(tipo => console.log(tipo))
  .catch(error => console.error(error.message));

module.exports = {
    buscarPokemon
}