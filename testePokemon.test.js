//npm install jest

////Para configurar o jest como script de teste deve-se editar o 'package.json'
//No agrupamento "scripts": {
//    "test": "echo \"Error: no test specified\" && exit 1"
//  }, alterar para:
//"scripts": {
//    "test": "jest"
//  },
//Para executar os testes:
//npm test

const axios = require('axios');
const {buscarPokemon} = require('./testePokemon');

jest.mock('axios');

describe('Teste da função buscarPokemon', () => {
  it('Deve retornar o Pokemon corretamente para um tipo válido', async () => {
    const data = {
      Nome: 'pikachu',
      Tipo: 'Eletrico',
    };

    
    axios.get.mockResolvedValue({ data });

    const pokemon = await buscarPokemon('charmander');

    expect(pokemon).toEqual(data);
    // expect(axios.get).toHaveBeenCalledWith('https://viacep.com.br/ws/01310-100/json/');
  });

  // it('Deve lançar um erro para um CEP inválido', async () => {
  //   const errorMessage = 'Não foi possível obter o endereço a partir do CEP informado';
  //   axios.get.mockRejectedValue(new Error(errorMessage));

  //   await expect(buscarPokemon('12345-678')).rejects.toThrow(errorMessage);
  //   expect(axios.get).toHaveBeenCalledWith('https://viacep.com.br/ws/12345-678/json/');
  // });
});