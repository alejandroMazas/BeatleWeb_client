import { useState } from "react"
import { Form, Button } from "react-bootstrap"

const CommentForm = ({ submitComment, buttonLabel }) => {

    const [commentData, setCommentData] = useState({
        user: '',
        chapter: '',
        comment: '',
    })

    const handleInputChange = e => {
        const { name, value } = e.currentTarget

        setCommentData({
            ...commentData,
            [name]: value
        })
    }


    const { comment } = commentData

    const handleSubmit = e => {
        e.preventDefault()
        submitComment(commentData)
    }

    const disabled = comment.length === 0

    return (
        <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="name">
                <Form.Control type="text" value={comment} onChange={handleInputChange} name="comment" />
            </Form.Group>
            <Button variant="dark" type="submit" disabled={disabled}>{buttonLabel}</Button>

        </Form>

    )
}

export default CommentForm