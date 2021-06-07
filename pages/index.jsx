import React from 'react';
import Link from 'next/link';

// get static props 
export async function getStaticProps(context) {
    const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
        .then((respostaDoServer) => {
            if (respostaDoServer.ok) {
                return respostaDoServer.json();
            }
        })
        .then((respostaEmObjeto) => {
            return respostaEmObjeto.pokemon_entries;
        })

    return {
        props: {
            pokemons
        }
    }
}


export default function Home(props) {
    const { pokemons } = props;

    return (
        <div>
            <div>Pokedex + NextJS</div>

            <ul>
                {pokemons.map((pokemon) => (
                    <li key={pokemon.name}>
                        <Link href={`/pokemon/${pokemon.entry_number}`}>
                            <a>
                                {pokemon.entry_number} - {pokemon.pokemon_species.name}
                            </a>
                        </Link>
                    </li>

                ))}
            </ul>

        </div>
    )
}