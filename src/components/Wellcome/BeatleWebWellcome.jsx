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
                        En esta página encontraras mis trabajos relacionados con THE BEATLES y <strong>LA HISTORIA DE THE BEATLES EN COMICS </strong>
                        un comic dividido en 8 capítulos realizados por mí en el que represento la historia del grupo desde sus inicios.
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
            </section>

            <section className="section2">
                <div class="containerWellcome">
                    <div class="features">
                        <h3>¿Por qué BeatleWeb?</h3>
                        <p>Porque soy un apasionado de THE BEATLES y en esta web pretendo reflejar todos mis trabajos y os deseo que los disfruteis tanto como yo he disfrutado al realizarlos. </p>
                    </div>
                    <div class="features">
                        <h3>¿Que saco yo de todo esto?</h3>
                        <p>En realidad no saco nada, solo la satisfacción de hacer algo que me apasiona y el gusto de poder compartirlo con los fans de THE BEATLES como yo.</p>
                    </div>
                    <div class="features">
                        <h3>¿Cuanto tiempo te ha llevado?</h3>
                        <p>Este cómic llevo desarrollandolo durante años y actualmente sigo trabajando en él y en otros proyectos relacionados con THE BEATLES.</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BeatleWebWellcome