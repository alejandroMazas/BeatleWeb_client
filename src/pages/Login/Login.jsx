import { Container } from 'react-bootstrap'
import LoginForm from '../../components/LoginForm/LoginForm'
import './Login.css'

const LoginPage = () => {

    return (
        <>
            <div className='backgroundLogin'>

                <Container className='formContainer'>
                    <div className='formLoginBackground'>
                        <LoginForm />
                    </div>
                </Container>

            </div>
        </>

    )
}

export default LoginPage