import { Container, Row, Col } from "react-bootstrap"
import EditChapterForm from "../../components/EditChapterForm/EditChapterForm"
import './EditChapters.css'

const EditChapters = () => {
    return (
        <>
            <div className="backgroundEdit">
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className='formBackground'>
                        <Container>

                            <EditChapterForm />

                        </Container>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default EditChapters