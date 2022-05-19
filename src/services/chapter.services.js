import axios from 'axios'

class ChapterService {

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

    getAllChapters = () => {
        return this.axiosApp.get('/allChapters')
    }

    getChapterDetails = id => {
        return this.axiosApp.get(`/chapter/${id}`)
    }

    createNewChapter = chapter => {
        return this.axiosApp.post(`/newChapter`, chapter)
    }

    editChapter = (chapter, id) => {
        return this.axiosApp.put(`/chapter/${id}/edit`, chapter)
    }

    deleteChapter = id => {
        return this.axiosApp.delete(`/chapter/${id}/delete`)
    }

    sumViewers = id => {
        return this.axiosApp.put(`/chapterViewers/${id}`)
    }
}

const chaptersService = new ChapterService()

export default chaptersService