import { useState, useEffect } from 'react'
import { Form, Button } from "react-bootstrap"
import chaptersService from "../../services/chapter.services"
import uploadService from "../../services/upload.services"
import { useNavigate, useParams } from "react-router-dom"


const EditChapterForm = () => {

    const [chapterData, setChapterData] = useState({

    })

    const [loadingCover, setLoadingCover] = useState(false)
    const [loadingPages, setLoadingPages] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        getDetails()
    }, [])

    const getDetails = () => {
        chaptersService
            .getChapterDetails(id)
            .then(({ data }) => {
                setChapterData(data)
            })
            .catch(err => console.log(err))
    }


    const navigate = useNavigate()



    // const [allLoading, setAllLoading] = useState(false)


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
            .editChapter(chapterData, id)
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

    const { title, synopsys, number } = chapterData


    return (

        <>

            <h2 className="registro">Editar capítulo</h2>

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nuevo título</Form.Label>
                    <Form.Control type="text" value={title} onChange={handleInputChange} name="title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nuevo número de capítulo</Form.Label>
                    <Form.Control type="text" value={number} onChange={handleInputChange} name="number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nueva sinopsis</Form.Label>
                    <Form.Control type="text" value={synopsys} onChange={handleInputChange} name="synopsys" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cover">
                    <Form.Label>Nueva portada</Form.Label>
                    <Form.Control type="file" onChange={handleCoverUpload} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="pages">
                    <Form.Label>Nuevas páginas</Form.Label>
                    <Form.Control type="file" onChange={handlePagesUpload} multiple />
                </Form.Group>

                <Button variant="dark" type="submit">Editar capítulo</Button>

            </Form>

        </>


    )
}

export default EditChapterForm


  //  < Button variant = "dark" type = "submit" disabled = { allLoading } > { allLoading? 'Cargando imagen...': 'Nuevo capítulo' }</Button >