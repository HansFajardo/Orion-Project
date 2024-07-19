import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function ({ title, image, headText, subText, buttonText, info, number, page }) {
    return (
        <div className='container rounded-2 bg-white my-3 p-5 '>
            <Row className="align-items-center">
                <Col>
                    <h5>{title}</h5>
                </Col>
                <Col className="text-end text-info-emphasis">
                    {info && info.trim() !== "" && (
                        <Link to={`/${page}`}>
                            <div className='d-inline-block pointer'>
                                {info} {number}<i className="bi bi-chevron-right ms-2"></i>
                            </div>
                        </Link>
                    )}
                </Col>
            </Row>
            <div className='px-5'>
                <Row>
                    <Col lg={2}>
                        <img src={image}></img>
                    </Col>
                    <Col lg={10}>
                        <h2>
                            {headText}
                        </h2>
                        <p>
                            {subText}
                        </p>
                        <Link to={`/${page}`}>
                            <Button variant="primary" className="rounded-5 px-3">{buttonText}</Button>
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
