import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useTranslation } from 'react-i18next'
import './Login.css'

const LoginPage = () => {

    const [t, i18n] = useTranslation('global')

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