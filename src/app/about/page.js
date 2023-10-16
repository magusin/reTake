/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './page.module.css';
import Header from '#/components/Header/header';
import Footer from '#/components/Footer/footer';

const About = () => {
    return (
        <div>
        <main className="mainContent">
                <Header />
        <div className={styles.container}>
            <h1>À propos de Re: Take</h1>
            <section>
                <p>
                <b>Re: Take</b> est une chaine youtube française d'animation de détournement parodique créée par les youtubers <b>Maxime Hoareau</b> et <b>Victor Niverd</b>, diffusée depuis le 25 juin 2017 sur YouTube.
                </p>
                <p>
                Détournant principalement des animes japonais, cette chaine youtube à la particularité d'entendre des comédiens ayant doublés des personnages dans certaines des œuvres parodiées ou sur du fandub.
                </p>
            </section>
        </div>
        <Footer />
            </main>
        </div>
    );
};

export default About;