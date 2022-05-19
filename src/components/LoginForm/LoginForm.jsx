import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../../context/auth.context"
import authService from "../../services/auth.services"
import { useTranslation } from 'react-i18next'
import './LoginForm.css'



const LoginForm = () => {

    const [t, i18n] = useTranslation('global')

    const [loginData, setLoginData] = useState({ email: "", password: "" })

    const navigate = useNavigate()

    const { storeToken, authenticateUser } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setLoginData({ ...loginData, [name]: value })
    }

    const { password, email } = loginData


    return (
        <>

            <h2 className="registro">{t('Login.login')}</h2>

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label className="label1">{t('LoginForm.email')}</Form.Label>
                    <Form.Control type="email" onChange={handleInputChange} name="email" value={email} placeholder={t('LoginForm.emailPlace')} />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label className="label2">{t('LoginForm.password')}</Form.Label>
                    <Form.Control type="password" onChange={handleInputChange} name="password" value={password} placeholder={t('LoginForm.passwordPlace')} />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}

                <Button variant="primary" type="submit" className="bn633-hover bn24">
                    {t('LoginForm.button')}
                </Button>
            </Form>

        </>
    )
}

export default LoginForm