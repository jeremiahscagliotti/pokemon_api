import React, { useState,useEffect } from 'react';
import { getAllPokemon, getPokemon } from '../../services/pokemon';
import { Cards, Nav } from '../../components/index.js';

import './index.css';

const HomePage = props => {

    const [ pokemonData,setPokemonData ] = useState([]);
    const [ nextUrl, setNextUrl ] = useState('');
    const [ prevUrl, setPrevUrl ] = useState('');
    const [ loading, setLoading ] = useState(true);
    const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(initialUrl);
            console.log(response);
            setNextUrl(response.next);
            setPrevUrl(response.previous);
            await loadingPokemon(response.results);
            setLoading(false);
        }
        fetchData()
    }, [])

    const loadingPokemon = async data => {
        let _pokemonData = await Promise.all(
            data.map(async pokemon => {
            let pokemonRecord = await getPokemon(pokemon.url);
            return pokemonRecord;
        }))

        setPokemonData(_pokemonData)
    }

    console.log(pokemonData);

    return (

        <div className=''>

          <h1>Pokemon</h1>

          { 
          loading ? <h1>Loading...</h1> : (

              <div>
                  {pokemonData.map((pokemon, i) => {
                      return <Cards key={i} pokemon={pokemon} />
                  })}
              </div>
          )}


        </div>

    );
};

export default HomePage;