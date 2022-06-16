import './ChapterList.css'
import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import chaptersService from "../../services/chapter.services"
import ChapterCard from '../ChapterCard/ChapterCard'
import Spinner from '../Spinner/Spinner'
import { useTranslation } from 'react-i18next'


const ChapterList = ({ onClickImage }) => {

    const [t, i18n] = useTranslation('global')

    const [chapters, setChapters] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        loadChapters()
    }, [])

    const loadChapters = () => {
        setLoading(true)
        chaptersService
            .getAllChapters()
            .then(({ data }) => {
                setLoading(false)
                setChapters(data)
            })
    }

    const deleteChapter = chapterId => {

        chaptersService
            .deleteChapter(chapterId)
            .then(({ data }) => {
                const filteredChapters = chapters.filter(chapter => {
                    return (chapter._id !== data._id)
                })
                setChapters(filteredChapters)
            })
    }

    const updateViewers = chapterId => {

        chaptersService
            .sumViewers(chapterId)
            .then(({ data }) => {
                console.log(data)
            })
            .catch(err => console.log(err))
    }


    if (chapters.length === 0 && !loading) {
        return <h2>No hay capítulos</h2>
    }

    return (

        <Container>
            <Row>
                <h2 className='heading'>{t('ChapterList.chapters')}</h2>

                {
                    !loading
                        ?
                        chapters.map(chapter =>


                            < Col md={{ span: 4 }} sm={{ span: 6 }} lg={{ span: 3 }} key={chapter._id}>
                                <ChapterCard {...chapter}
                                    onClickImage={onClickImage}
                                    deleteChapter={deleteChapter}
                                    updateViewers={updateViewers}
                                />

                            </Col>

                        )
                        :
                        <Spinner />
                }

            </Row >
        </Container >

    )
}

export default ChapterList

