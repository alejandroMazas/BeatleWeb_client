import React from "react";
import './BeatleWebWellcome.css'
import { useTranslation } from 'react-i18next'

const BeatleWebWellcome = () => {

    const [t, i18n] = useTranslation('global')

    return (
        <>
            <section className="section1">
                <h1 className="bienvenida">{t('BeatleWebWellcome.wellcome')}</h1>
                <article>
                    <p className="beatleWeb">
                        {t('BeatleWebWellcome.beatleWeb')}
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
                        <h3>{t('BeatleWebWellcome.whyBeatleweb')}</h3>
                        <p>{t('BeatleWebWellcome.why')}</p>
                    </div>
                    <div class="features">
                        <h3>{t('BeatleWebWellcome.what')}</h3>
                        <p>{t('BeatleWebWellcome.whatGet')}</p>
                    </div>
                    <div class="features">
                        <h3>{t('BeatleWebWellcome.when')}</h3>
                        <p>{t('BeatleWebWellcome.whenDo')}</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BeatleWebWellcome