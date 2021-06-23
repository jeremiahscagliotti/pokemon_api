import React from 'react';


import './index.css';

function Cards({pokemon}) {

    return (

        <div className='Card'>

            <img src={pokemon.sprites.front_default} alt='pokemon'/>

            {pokemon.name}

            <p>
                Type: {pokemon.types.map(type => {
                return(
                    <div>
                        {type.type.name}
                    </div>
                )
            })}
            </p>
            

            <p>Weight: {pokemon.weight}</p>

            <p>Height: {pokemon.height}</p>

            <p>Ability: {pokemon.abilities[0].ability.name}</p>

        </div>

    );
};

export default Cards;