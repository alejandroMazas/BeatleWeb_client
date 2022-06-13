import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from '../../components/LoginForm/LoginForm'
import './Login.css'

const LoginPage = () => {

    return (
        <>
            <div className='backgroundLogin'>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className='formBackground'>
                        <Container>

                            <LoginForm />

                        </Container>
                    </Col>
                </Row>
            </div>
        </>

    )
}

export default LoginPage