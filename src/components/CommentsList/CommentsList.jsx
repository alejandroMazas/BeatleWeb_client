import { Container, Row, Col } from 'react-bootstrap'
import CommentCard from '../CommentCard/CommentCard'

const CommentsList = ({ chapterComments, deleteComment }) => {


    return (
        <Container>
            <Row>
                {
                    chapterComments.map(comment => {

                        return <Col key={comment._id}>
                            <CommentCard comment={comment} deleteComment={deleteComment} />
                        </Col>

                    })

                }
            </Row >
        </Container >
    )
}

export default CommentsList