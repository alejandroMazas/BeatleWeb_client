import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import './GalleryItems.css'
import { useTranslation } from 'react-i18next'


const GalleryItems = () => {

    const [t, i18n] = useTranslation('global')

    return (
        <>

            <div className="galleryHeader">
                <h2 className="galleryHeading">{t('galleryItems.gallery')}</h2>
            </div>

            <div className="galleryBackground1">
                <Container>
                    <Row>
                        <Col>
                            <h3 className="gallerySections">{t('galleryItems.draws')}</h3>

                            <Row>
                                <Col md={{ span: 7 }}>
                                    <div>
                                        <img className="revolver" src="../../../imagenes/Experimental Revolver.jpg" alt=""></img>
                                    </div>
                                </Col>

                                <Col md={{ span: 5 }}>
                                    <div>
                                        <img className="dibujo1" src="../../../imagenes/dibujo3.jpg" alt=""></img>
                                    </div>
                                    <div>
                                        <img className="dibujo2" src="../../../imagenes/dibujo1.jpg" alt=""></img>
                                    </div>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="galleryBackground2">
                <Container>
                    <Row>
                        <Col>
                            <h3 className="gallerySections">{t('galleryItems.paint')}</h3>

                            <Row>
                                <Col md={{ span: 6 }}>
                                    <div>
                                        <img className="oleo1" src="../../../imagenes/oleo1.jpg" alt=""></img>
                                    </div>
                                    <div>
                                        <img className="oleo2" src="../../../imagenes/oleo2.jpg" alt=""></img>
                                    </div>
                                </Col>
                                <Col md={{ span: 6 }}>
                                    <div>
                                        <img className="cuadro" src="../../../imagenes/cuadro2.jpg" alt=""></img>
                                    </div>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="galleryBackground3">
                <Container>
                    <Row>
                        <Col>
                            <h3 className="gallerySections">{t('galleryItems.cyber art')}</h3>

                            <Row>

                                <Col md={{ span: 12 }}>
                                    <div>
                                        <img className="cyber" src="../../../imagenes/bass1.jpg" alt=""></img>
                                    </div>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>

    )
}

export default GalleryItems