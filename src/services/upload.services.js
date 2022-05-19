import axios from 'axios'

class UploadService {

    constructor() {

        this.axiosApp = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/upload` })

        this.axiosApp.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }


    uploadImage(imageForm) {
        return this.axiosApp.post('/cover', imageForm)
    }

    uploadImages(imageForm) {
        return this.axiosApp.post('/pages', imageForm)
    }
}

const uploadService = new UploadService()

export default uploadService