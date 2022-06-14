import { Spinner as Loader } from "react-bootstrap"
import './Spinner.css'

const Spinner = () => {
    return (

        <Loader animation="border" role="status" className="spinner">
            <span className="visually-hidden">Loading...</span>
        </Loader>

    )
}

export default Spinner