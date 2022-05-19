import './Navigation.css'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import { NavLink } from 'react-router-dom'
import React from "react";
import { useTranslation } from 'react-i18next'



const Navigation = () => {

    const [t, i18n] = useTranslation('global')

    const { user, logOutUser, isLoggedIn } = useContext(AuthContext)

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><NavLink to="/" className={'navLink'}>BeatleWeb</NavLink></Navbar.Brand>
                <NavLink to="/capitulos" className={'navLink'}>{t('Navigation.chapters')}</NavLink>
                <NavLink to="/gallery" className={'navLink'}>{t('Navigation.gallery')}</NavLink>
                {
                    (isLoggedIn && user.role === 'ADMIN') &&
                    <NavLink to="/crear-capitulo" className={'navLink'}>Crear capítulo</NavLink>
                }
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        {
                            isLoggedIn
                                ?
                                <NavLink to='/' className={'navLink'} onClick={logOutUser} >{t('Navigation.logout')} </NavLink>
                                :
                                <>
                                    <NavLink to='/registro' className={'navLink'}>{t('Navigation.signup')}</NavLink>
                                    <NavLink eventKey={2} to="/iniciar-sesion" className={'navLink'}>
                                        {t('Navigation.login')}
                                    </NavLink>
                                </>

                        }
                        <button className='languageChange' onClick={() => i18n.changeLanguage('es')}>ES</button>
                        <button className='languageChange' onClick={() => i18n.changeLanguage('en')}> EN</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation