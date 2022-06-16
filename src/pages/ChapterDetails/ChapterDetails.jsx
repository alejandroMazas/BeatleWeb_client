import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import chaptersService from '../../services/chapter.services'
import CommentsList from '../../components/CommentsList/CommentsList'
import commentsService from '../../services/comment.services'
import CommentForm from '../../components/CommentForm/CommentForm'
import { AuthContext } from '../../context/auth.context'
import HTMLFlipBook from 'react-pageflip'
import './ChapterDetails.css'

const ChapterDetails = () => {

    const { user, isLoggedIn } = useContext(AuthContext)

    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)


    const [chapterDetails, setChapterDetails] = useState({})

    const [chapterComments, setChapterComments] = useState([])

    const [chapterViewers, setChapterViewers] = useState()



    const { id } = useParams()

    useEffect(() => {
        chaptersService
            .getChapterDetails(id)
            .then(({ data }) => {
                setChapterDetails(data)
            })
            .catch(err => console.log(err))

        commentsService
            .getChapterComments(id)
            .then(({ data }) => {
                setChapterComments(data)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteComment = commentId => {

        commentsService
            .deleteComment(commentId)
            .then(({ data }) => {
                const filteredComments = chapterComments.filter(comment => {
                    return (data._id !== comment._id)
                })
                setChapterComments(filteredComments)
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = commentData => {

        commentsService
            .createNewComment(id, commentData)
            .then((response) => {
                closeModal()
                const newComment = {
                    ...response.data,
                    author: user
                }
                setChapterComments([...chapterComments, newComment])
            })
            .catch(err => console.log(err))
    }

    return (

        <>
            <div className='chapterDetailsBackground'>


                <Container>

                    <Row>

                        <Col md={{ span: 12 }} className="mt-3" >

                            <HTMLFlipBook width={648}
                                height={920}
                                size="stretch"
                                minWidth={315}
                                maxWidth={1000}
                                minHeight={400}
                                maxHeight={1533}
                                className='flipbook'>
                                {
                                    chapterDetails?.pages?.map(page => {
                                        return <img src={page} alt="" />
                                    })
                                }
                            </HTMLFlipBook>

                        </Col>
                    </Row >

                    <h4 className='views'>{chapterDetails?.pages?.length} Páginas</h4>

                    <h3 className='views'>Visitas: {chapterDetails.viewers}</h3>

                </Container >


                <Modal show={showModal} onHide={closeModal}>
                    <Modal.Header className='modalBackground'>
                        <Modal.Title className='commentText'>Escribe tu comentario</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CommentForm
                            submitComment={handleSubmit}
                            buttonLabel="Comentar"
                        />
                    </Modal.Body>
                </Modal>

            </div>

            <div className='line'></div>
            <Container>
                <div className='commentBox' >
                    <h2 className='comments'>Comentarios</h2>

                    {
                        isLoggedIn &&
                        <Button onClick={openModal}>Comentar</Button>
                    }

                    <CommentsList chapterComments={chapterComments} deleteComment={deleteComment} />
                </div>
            </Container>

        </>
    )
}

export default ChapterDetails