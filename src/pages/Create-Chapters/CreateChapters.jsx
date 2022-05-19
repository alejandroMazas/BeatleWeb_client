import { Container, Row, Col } from "react-bootstrap"
import NewChapterForm from "../../components/NewChapterForm/NewChapterForm"
import './CreateChapters.css'

const CreateChapters = () => {
    return (
        <>
            <div className='backgroundCreateChapters'>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className='formBackground'>
                        <Container>

                            <NewChapterForm />

                        </Container>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default CreateChapters