import React from 'react';
import { Character, getCharacterResult } from '../../../types';
import styles from './Person.module.css';
import Image from 'next/image';
import imageLoader from '../../../imageLoader';
import MetaTitle from '@/ui/meta-title/MetaTitle';

const Person = ({ character }: { character: Character }) => {
 
    return (
        <>
            <MetaTitle title={character.name} />
            <div className="container">
                <div className={styles.person}>
                    <Image
                        loader={imageLoader}
                        unoptimized
                        width={400}
                        height={600}
                        src={character.image}
                        alt={character.name}
                        quality={80}
                    />

                    <ul className={styles.info}>
                        <h1 className={styles.title}>{character.name}</h1>
                        <hr />
                        <li>
                            <span>Status:</span>
                            {character.status}
                        </li>
                        <li>
                            <span>Species:</span>
                            {character.species}
                        </li>
                        <li>
                            <span>Gender:</span>
                            {character.gender}
                        </li>
                        
                        <li>
                            <span>Gender:</span>
                            {character.gender}
                        </li>
                        <li className={styles.origin}>
                            <span>Origin:</span>
                            <div>
                                <b> {character.origin.name}</b>
                                <br />
                                <a href={character.origin.url}>{character.origin.url}</a>
                            </div>
                        </li>
                        <li>
                            <span>Was created at:</span>
                            {new Date(character.created).toLocaleString()}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export async function getStaticPaths() {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const { results }: getCharacterResult = await res.json();
    const paths = results.map((character) => {
        return { params: { id: String(character.id) } };
    });
    return {
        paths,
        fallback: false // or true if you want to enable dynamic route generation
    };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
    const character = await res.json();
    return {
        props: {
            character
        }
    };
}
export default Person;
