import { Container } from 'react-bootstrap'
import SignupForm from '../../components/SignupForm/SignupForm'
import './Signup.css'

const SignupPage = () => {

    return (
        <>
            <div className='backgroundSignup'>

                <Container className='formContainer'>
                    <div className='formSignupBackground'>
                        <SignupForm />
                    </div>
                </Container>

            </div>
        </>

    )
}

export default SignupPage