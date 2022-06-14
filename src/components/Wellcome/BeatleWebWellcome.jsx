import React from "react";
import './BeatleWebWellcome.css'
import { useTranslation } from 'react-i18next'

const BeatleWebWellcome = () => {

    const [t, i18n] = useTranslation('global')

    return (
        <>
            <section className="section1">
                <div className="wellcomeBox">
                    <h1 className="wellcome">{t('BeatleWebWellcome.wellcome')}</h1>
                    <article>
                        <p className="beatleWeb">
                            {t('BeatleWebWellcome.beatleWeb')}
                        </p>
                    </article>
                </div>
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