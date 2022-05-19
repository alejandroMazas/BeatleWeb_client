import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import AuthService from "../../services/auth.services"
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './SignupForm.css'



const SignupForm = () => {

    const [t, i18n] = useTranslation('global')

    const [signupData, setSignupData] = useState({ username: "", email: "", password: "" })

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        AuthService
            .signup(signupData)
            .then(res => {
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setSignupData({ ...signupData, [name]: value })
    }

    const { username, password, email } = signupData


    return (
        <>

            <h2 className="registro">{t('Signup.signup')}</h2>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label className="label1">{t('SignupForm.username')}</Form.Label>
                    <Form.Control type="text" onChange={handleInputChange} name="username" value={username} placeholder={t('SignupForm.usernamePlace')} />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label className="label2">{t('SignupForm.email')}</Form.Label>
                    <Form.Control type="email" onChange={handleInputChange} name="email" value={email} placeholder={t('SignupForm.emailPlace')} />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label className="label3">{t('SignupForm.password')}</Form.Label>
                    <Form.Control type="password" onChange={handleInputChange} name="password" value={password} placeholder={t('SignupForm.passwordPlace')} />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}

                <Button variant="primary" type="submit" className="bn634-hover bn24">
                    {t('SignupForm.button')}
                </Button>
            </Form>
        </>
    )
}

export default SignupForm