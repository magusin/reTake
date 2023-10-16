/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './page.module.css';
import Header from '#/components/Header/header';
import Footer from '#/components/Footer/footer';

const MentionsLegales = () => {
    return (
        <div>
            <main className="mainContent">
                <Header />
                <div className={styles.container}>
                    <h1 className={styles.h1}>Mentions Légales</h1>
                    <p className={styles.h1}>En vigueur au 16/10/2023</p>
                    <section>
                        <p>Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la
                            Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et
                            visiteurs, ci-après l""<b>Utilisateur</b>", du site https://re-take.vercel.app/ , ci-après le "<b>Site</b>", les présentes
                            mentions légales.</p>
                        <p>La connexion et la navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans réserve
                            des présentes mentions légales.</p>
                        <p>Ces dernières sont accessibles sur le Site à la rubrique « <b>Mentions légales</b> ».
                        </p>
                    </section>

                    <section>
                        <h2 className={styles.h2}>ARTICLE 1 - L'EDITEUR</h2>
                        <p>L’édition et la direction de la publication du Site est assurée par JACQUES Hugo, dont le numéro de téléphone est 0764450382, et l'adresse e-mail
                            hugo.jacques71@gmail.com.
                        </p>
                    </section>

                    <section>
                        <h2 className={styles.h2}>ARTICLE 2 - L'HEBERGEUR</h2>
                        <p>L'hébergeur du Site est la société Vercel, dont le siège social est situé au PLACE LIBERATION,
                            25530 VERCEL-VILLEDIEU-LE-CAMP.
                        </p>
                    </section>

                    <section>
                        <h2 className={styles.h2}>ARTICLE 3 - ACCES AU SITE</h2>
                        <p>Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption
                            programmée ou non et pouvant découlant d’une nécessité de maintenance.</p>
                        <p>En cas de modification, interruption ou suspension des services le Site ne saurait être tenu responssable.</p>
                    </section>

                    <section>
                        <h2 className={styles.h2}>ARTICLE 4 - COLLECTE DES DONNEES</h2>
                        <p>Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans la
                            mesure où il ne collecte aucune donnée concernant les utilisateurs.
                        </p>
                        <p>Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site,
                            sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires
                            telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.
                        </p>
                    </section>
                </div>
                <Footer />
            </main>
        </div>
    );
};

export default MentionsLegales;