import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { AuthContext } from '../../context/auth.context'
import { useContext } from 'react'
import './CommentCard.css'

const CommentCard = ({ comment, deleteComment }) => {

    const { user, logOutUser, isLoggedIn } = useContext(AuthContext)

    return (
        <>
            <Card className='comment'>
                <Card.Header className='commentBackground'>{comment?.author?.username}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            {comment.comment}{' '}
                        </p>
                        {/* <footer className="blockquote-footer">
                            <cite title="Source Title">{comment.timestamps}</cite>
                        </footer> */}
                    </blockquote>
                </Card.Body>
                {
                    (isLoggedIn && user.role === 'ADMIN' || user && user?._id === comment?.author?._id) &&
                    <Button variant='warning' onClick={() => deleteComment(comment?._id)}>Eliminar comentario</Button>
                }

            </Card>
        </>
    )
}

export default CommentCard