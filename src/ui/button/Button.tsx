import Link from 'next/link';
import React from 'react';
import styles from './Button.module.css';

const Button = ({ title }: any) => {
    return (
        <Link href='/characters'>
            <div className={styles.button}>
                <span>{title}</span>
            </div>
        </Link>
    );
};

export default Button;
