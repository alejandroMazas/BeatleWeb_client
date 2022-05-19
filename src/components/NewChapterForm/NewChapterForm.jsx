import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import chaptersService from "../../services/chapter.services"
import uploadService from "../../services/upload.services"
import { useNavigate } from "react-router-dom"
import './NewChapterForm.css'


const NewChapterForm = () => {

    const [chapterData, setChapterData] = useState({
        title: '',
        number: 0,
        synopsys: '',
        cover: '',
        pages: ''
    })

    const navigate = useNavigate()

    const [loadingCover, setLoadingCover] = useState(false)
    const [loadingPages, setLoadingPages] = useState(false)


    const handleInputChange = e => {
        const { name, value } = e.currentTarget

        setChapterData({
            ...chapterData,
            [name]: value
        })
    }


    const handleSubmit = e => {

        e.preventDefault()

        chaptersService
            .createNewChapter(chapterData)
            .then(() => {
                navigate('/capitulos')
            })
            .catch(err => console.log(err))
    }

    const handleCoverUpload = (e) => {

        setLoadingCover(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])


        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingCover(false)
                setChapterData({ ...chapterData, cover: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const handlePagesUpload = (e) => {

        setLoadingPages(true)

        const uploadData = new FormData()
        for (let i = 0; i < e.target.files.length; i++) {
            uploadData.append('imageData', e.target.files[i])
        }


        uploadService
            .uploadImages(uploadData)
            .then(({ data }) => {
                setLoadingPages(false)
                setChapterData({ ...chapterData, pages: data.cloudinary_urls })
            })
            .catch(err => console.log(err))
    }


    const { title, number, synopsys, cover, pages } = chapterData


    const disabled = (chapterData) => {
        if (chapterData.title === "" || chapterData.number === "" || chapterData.synopsys === "") {
            return true
        } return false
    }

    return (

        <>

            <h2 className="registro">Crear capítulo</h2>

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" value={title} onChange={handleInputChange} name="title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Sinopsis</Form.Label>
                    <Form.Control type="text" value={synopsys} onChange={handleInputChange} name="synopsys" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Número de capítulo</Form.Label>
                    <Form.Control type="text" value={number} onChange={handleInputChange} name="number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cover">
                    <Form.Label>Portada</Form.Label>
                    <Form.Control type="file" onChange={handleCoverUpload} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="pages">
                    <Form.Label>Páginas</Form.Label>
                    <Form.Control type="file" onChange={handlePagesUpload} multiple />
                </Form.Group>

                <Button variant="dark" type="submit" disabled={loadingPages || disabled(chapterData)}> {loadingPages ? 'Cargando imagenes...' : 'Nuevo capítulo'}</Button>

            </Form >

        </>

    )
}

export default NewChapterForm