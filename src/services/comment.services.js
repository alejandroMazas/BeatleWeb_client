import axios from 'axios'

class CommentsService {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/`
        })

        this.axiosApp.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllComments = () => {
        return this.axiosApp.get('/comments')
    }

    getChapterComments = chapterId => {
        return this.axiosApp.get(`/chapter/${chapterId}/comments`)

    }

    createNewComment = (chapterId, commentData) => {
        return this.axiosApp.post(`/chapter/${chapterId}/newComment`, commentData)
    }

    deleteComment = id => {
        return this.axiosApp.delete(`/comments/${id}/delete`)
    }

}

const commentsService = new CommentsService()

export default commentsService