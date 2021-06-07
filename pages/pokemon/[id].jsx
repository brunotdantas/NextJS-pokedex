import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

export default function Pokemon({ pokemon, pokemonDetail }) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <img className={styles.imagem} src={pokemon.sprites.front_default} alt={`Imagem do pokemon {pokemon.name}`} />
                <div className={styles.info}>
                    <p><b>Id:</b> {pokemon.id}</p>
                    <p><b>Name:</b>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
                    <p><b>Description:</b> {pokemonDetail.flavor_text_entries[0].flavor_text}</p>

                    <Link href={`/`}>
                        <a>Voltar para Home</a>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export async function getStaticProps({ params }) {

    // pega dados de imagem 1 pokemon específico que virá pela rota 
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
        .then((respostaDoServer) => {
            if (respostaDoServer.ok) {
                return respostaDoServer.json();
            }

            throw new Error('Problema durante a resposta do server pokeapi')
        })
        .then((respostaEmObjeto) => respostaEmObjeto);

    // pega dados de evolução de 1 pokemon específico que vira pela rota
    const pokemonDetail = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${params.id}`)
        .then((respostaDoServer) => {
            if (respostaDoServer.ok) {
                return respostaDoServer.json();
            }

            throw new Error('Problema durante a resposta do server pokeapi')
        })
        .then((respostaEmObjeto) => respostaEmObjeto);


    return {
        props: {
            pokemon,
            pokemonDetail
        }
    }
}

export async function getStaticPaths() { //Basicamente o mesmo código da Home, com diferença no return
    const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
        .then((respostaDoServer) => {
            if (respostaDoServer.ok) {
                return respostaDoServer.json();
            }
            throw new Error('Deu problema');
        })
        .then((respostaEmObjeto) => respostaEmObjeto.pokemon_entries);
    return {
        paths: pokemons.map((pokemon) => ({ //pra cada pokemon na resposta, um caminho sera gerado
            params: {
                id: pokemon.entry_number.toString(), //necessario usar o toString porque não aceita inteiro como caminho (path)
            },
        })),
        fallback: false,
    };
}