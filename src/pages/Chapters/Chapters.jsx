import { useState } from 'react'
import { Container, Modal, Button } from 'react-bootstrap'
import ChapterList from '../../components/ChapterList/ChapterList'
import './Chapters.css'

const Chapters = () => {
    const [showModal, setShowModal] = useState(false)
    const [cover, setCover] = useState('')

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const handleImage = (cover) => {
        openModal()
        setCover(cover)
    }

    return (
        <>
            <div className='chaptersBackground'>
                <>
                    <ChapterList onClickImage={handleImage} />
                </>
            </div >

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Body>
                    <img className='coverImg' src={cover} alt="Cover" />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Chapters
