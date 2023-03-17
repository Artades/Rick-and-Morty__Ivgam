import MetaTitle from '@/ui/meta-title/MetaTitle';
import React from 'react';
import styles from './Characters.module.css';
import Image from 'next/image';
import { NextPage } from 'next/types';
import { Character, getCharacterResult } from '../../../types';
import imageLoader from '../../../imageLoader';
import Link from 'next/link';

const Characters: NextPage<{ characters: Character[] }> = ({ characters }) => {
    return (
        <>
            <MetaTitle title={'Characters'} />
            <div className="container">
                <div className={styles.characters}>
                    <h1>Main Characters</h1>
                    <div className={styles.body}>
                        {/* <hr /> */}

                        {characters &&
                            characters.map((character: any) => (
                                <Link href={`/characters/${character.id}`}>
                                    <div className={styles.character} key={character.id}>
                                        <div className={styles.image}>
                                            <Image
                                                loader={imageLoader}
                                                unoptimized
                                                width={200}
                                                height={200}
                                                alt="Character"
                                                src={character.image}
                                            />
                                        </div>
                                        <h2>{character.name}</h2>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export async function getStaticProps() {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const { results }: getCharacterResult = await res.json();
    return {
        props: {
            characters: results,
        },
       
    };
}

export default Characters;
