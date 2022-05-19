import { Card, Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import './ChapterCard.css'

const ChapterCard = ({ _id, synopsys, cover, onClickImage, deleteChapter, updateViewers }) => {

    const { user, isLoggedIn } = useContext(AuthContext)
    const [t, i18n] = useTranslation('global')

    return (
        <Card className='chapterCard'>
            <Card.Body>
                <Card.Img className='coverImg'
                    variant="top"
                    src={cover}
                    onClick={() => onClickImage(cover)}
                />

                <Card.Text>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>{t('ChapterCard.synopsys')}</Accordion.Header>
                            <Accordion.Body className='accordionBody'>
                                {synopsys}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </Card.Text>


                {
                    (isLoggedIn && user.role === 'ADMIN')
                        ?
                        <>
                            <Link to={`/capitulos/${_id}`}><button class="bn632-hover bn26">Ir al capítulo</button></Link>
                            <hr></hr>
                            <Link to={`/editar-capitulo/${_id}`}><button class='bn631-hover bn26'>Editar capítulo</button></Link>
                            <button className='bn629-hover bn26' onClick={() => deleteChapter(_id)}>Eliminar capítulo</button>
                        </>
                        :
                        <Link to={`/capitulos/${_id}`}
                            onClick={() => updateViewers(_id)}
                        ><button class="bn632-hover bn26" >{t('ChapterCard.goToChapter')}</button></Link>
                }

            </Card.Body>
        </Card>
    )
}

export default ChapterCard