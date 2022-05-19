import { Container, Row, Col } from 'react-bootstrap'
import SignupForm from '../../components/SignupForm/SignupForm'
import './Signup.css'

const SignupPage = () => {

    return (
        <>
            <div className='backgroundSignup'>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className='formBackground'>
                        <Container>

                            <SignupForm />

                        </Container>
                    </Col>
                </Row>
            </div>
        </>

    )
}

export default SignupPage