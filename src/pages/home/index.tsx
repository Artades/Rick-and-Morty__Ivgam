import Button from '@/ui/button/Button'
import MetaTitle from '@/ui/meta-title/MetaTitle';
import React from 'react'
import styles from './Home.module.css'

const Home = ({characters}: any) => {

  return (
      <>
          <MetaTitle title={'Promo'} />
          <div className={styles.home}>
              <div className={styles.body}>
                  <div className={styles.greeting}>
                      <h1 className={styles.title}>
                          Welcome to <span>Rick and Morty</span> && <span>Ivgam</span>{' '}
                          collaboration!
                      </h1>
                      <p className={styles.text}>
                          Our highly-demanded web-app is designed to help you explore the
                          fascinating lore of Rick and Morty. Get ready to embark on an exciting
                          journey with our app! 🚀
                      </p>

                      <Button title="Figure out" />
                  </div>
              </div>
          </div>
      </>
  );
}

export default Home
