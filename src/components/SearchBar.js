import React, {useState} from 'react';
import axios from 'axios';

function SearchBar({setPokemonInfo, pokemonInfo}) {

    const [search, setSearch] = useState('');

    const searchTest = (e) => {
        setSearch((e.target.value));
    }

    const getPokemonInfo = (pokemonName) => {

        pokemonName = pokemonName.trim().toLowerCase();
        console.log(pokemonName);

        setPokemonInfo('searching');

        setTimeout(() => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
       .then(res => {
          setPokemonInfo({
              name: res.data.name,
              imgUrl: res.data.sprites.other['official-artwork'].front_default,
              pokemonType: res.data.types[0].type.name,
              statisticsData: {
                  attack: res.data.stats[1].base_stat,
                  defense: res.data.stats[2].base_stat,
                  health: res.data.stats[0].base_stat,
                  height: res.data.height,
                  weight: res.data.weight,
                  speed: res.data.stats[5].base_stat
              },
              pictures: [
                  res.data.sprites.back_default,
                  res.data.sprites.back_shiny,
                  res.data.sprites.front_default,
                  res.data.sprites.front_shiny
              ],
              abilities: res.data.abilities
          });
       })
       .catch(error => {
           setPokemonInfo('not found');
           setTimeout(() => {
               setPokemonInfo(null);
           }, 1000);
       })
        }, 3000);

       
    }

    return (
        <div className="search-bar">
            <input type="text" placeholder="Search for a pokemon" onChange={(e) => searchTest(e)} />
            <i className="fas fa-search"  onClick ={() => getPokemonInfo(search)} />
          </div>
    )
}

export default SearchBar
