/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './page.module.css';
import Header from '#/components/Header/header';
import Footer from '#/components/Footer/footer';

const CGU = () => {
    return (
        <div>
            <main className="mainContent">
                <Header />
                <div className={styles.container}>
                    <h1 className={styles.h1}>Conditions générales d'utilisation</h1>
                    <p className={styles.h1}>En vigueur au 16/10/2023</p>
                    <section>
                        <p>Les présentes conditions générales d'utilisation (dites « <b>CGU</b> ») ont pour objet l'encadrement juridique
                            des modalités de mise à disposition du site et des services et de définir les
                            conditions d’accès et d’utilisation des services par « <b>l'Utilisateur</b> ».</p>
                        <p>Les présentes CGU sont accessibles sur le site à la rubrique «CGU».</p>
                    </section>

                    <section>
                        <h2 className={styles.h2}>ARTICLE 1 - Les mentions légales</h2>
                        <p>L’édition et la direction de la publication du site https://re-take.vercel.app/ est assurée par JACQUES
                            Hugo,
                            Numéro de téléphone est 0764450382
                            Adresse e-mail hugo.jacques71@gmail.com.
                        </p>
                        <p>L'hébergeur du Site est la société Vercel, dont le siège social est situé au PLACE LIBERATION,
                            25530 VERCEL-VILLEDIEU-LE-CAMP.
                        </p>
                    </section>

                    <section>
                        <h2 className={styles.h2}>ARTICLE 2 - Accès au site</h2>
                        <p>Le site https://re-take.vercel.app/ permet à l'Utilisateur un accès gratuit aux services suivants :
                            Le site internet propose les services suivants :
                            Publication de vidéo
                            Présentation des comédiens
                            Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les
                            frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion
                            Internet, etc.) sont à sa charge.
                        </p>
                    </section>

                    <section>
                        <h2 className={styles.h2}>ARTICLE 3 - Collecte des données</h2>
                        <p>Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans la
                            mesure où il ne collecte aucune donnée concernant les utilisateurs.
                        </p>
                        <p>Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site,
                            sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires
                            telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.
                        </p>
                    </section>

                    <section>
                        <h2 className={styles.h2}>ARTICLE 4 - Propriété intellectuelle</h2>
                        <p>Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…) font l'objet
                            d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.
                        </p>
                        <p>L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des
                            différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement privé,
                            toute utilisation à des fins commerciales et publicitaires est strictement interdite.
                        </p>
                        <p>Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l’autorisation
                            expresse de l’exploitant du site Internet constituerait une contrefaçon sanctionnée par l’article L 335-2
                            et suivants du Code de la propriété intellectuelle.</p>
                        <p>Il est rappelé conformément à l’article L122-5 du Code de propriété intellectuelle que l’Utilisateur qui
                            reproduit, copie ou publie le contenu protégé doit citer l’auteur et sa source.</p>
                        <p>Toute vidéos, images, contenus sur ce site sont la propriété de <b>Re: Take</b></p>
                    </section>

                    <section>
                        <h2 className={styles.h2}>ARTICLE 5 - Responsabilité</h2>
                        <p>Les sources des informations diffusées sur le site https://re-take.vercel.app/ sont réputées fiables mais
                            le site ne garantit pas qu’il soit exempt de défauts, d’erreurs ou d’omissions.
                        </p>
                        <p>Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle.
                            Malgré des mises à jour régulières, le site https://re-take.vercel.app/ ne peut être tenu responsable de
                            la modification des dispositions administratives et juridiques survenant après la publication. De même,
                            le site ne peut être tenue responsable de l’utilisation et de l’interprétation de l’information contenue
                            dans ce site.
                            Le site https://re-take.vercel.app/ ne peut être tenu pour responsable d’éventuels virus qui pourraient
                            infecter l’ordinateur ou tout matériel informatique de l’Internaute, suite à une utilisation, à l’accès, ou
                            au téléchargement provenant de ce site.
                        </p>
                        <p>La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et
                            insurmontable d'un tiers.
                        </p>
                    </section>

                    <section>
                        <h2 className={styles.h2}>ARTICLE 6 - Liens hypertextes</h2>
                        <p>Des liens hypertextes peuvent être présents sur le site. L’Utilisateur est informé qu’en cliquant sur ces
                            liens, il sortira du site https://re-take.vercel.app/. Ce dernier n’a pas de contrôle sur les pages web sur
                            lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.
                        </p>
                    </section>

                    <section>
                        <h2 className={styles.h2}>ARTICLE 7 - Droit applicable et juridiction compétente</h2>
                        <p>La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un
                            litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître.
                            Pour toute question relative à l’application des présentes CGU, vous pouvez joindre l’éditeur aux
                            coordonnées inscrites à l’ARTICLE 1.
                        </p>
                    </section>
                </div>
                <Footer />
            </main>
        </div>
    );
};

export default CGU;