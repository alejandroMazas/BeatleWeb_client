import React from "react";
import { Container } from "react-bootstrap";
import './BeatleWebWellcome.css'

const BeatleWebWellcome = () => {
    return (
        <>
            <section className="section1">
                <h1 className="bienvenida">Bienvenido a BeatleWeb</h1>
                <article>
                    <p className="beatleWeb">
                        Beatle Web esta dedicada a todo fan de THE BEATLES que tenga como hobby el dibujo
                        ,la pintura, la escultura o cualquier otra modalidad de arte.
                        En esta página encontraras mis trabajos relacionados con THE BEATLES y LA HISTORIA DE THE BEATLES EN COMICS
                        un comic dividido en 8 capñitulos realizados por mí en el que represento la historia del grupo desde sus inicios.
                    </p>

                    {/* <p>
                    Aquí pretendo reflejar todos mis trabajos y los de otros artistas no profesionales,
                    que sean dignos de mención y que tengan algo que ver con este tema "THE BEATLES".
                    También para todos los fans en general y demás visitantes, mi deseo de que Beatle Web sea de vuestro agrado,
                    por eso... En Beatle Web no hay música ni fotos ni videos de THE BEATLES,
                    para eso tienes otras páginas en la Web que seguro ya conoces.
                    Aquí lo que encontraras son diversos trabajos realizados por mi y por otros artistas,
                    relacionados con THE BEATLES, y como regalo, LA HISTORIA DE THE BEATLES EN COMICS.
                </p> */}

                </article>
                <div class="buttons">
                    <a>Ir al comic</a>
                </div>
            </section>

            <section className="section2">
                <div class="containerWellcome">
                    <div class="features">
                        <h3>¿Por qué BeatleWeb?</h3>
                        <p>Create an org, add your team. and start colaborating. Nothing to configure, set up, or manage. </p>
                    </div>
                    <div class="features">
                        <h3>Team management</h3>
                        <p>Control who has acces to what modules within your team namespace using straightforward team management compatibilities.</p>
                    </div>
                    <div class="features">
                        <h3>Familiar features</h3>
                        <p>npm Orgs has 100% parity with all the public npm registry features your developers already use.</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BeatleWebWellcome