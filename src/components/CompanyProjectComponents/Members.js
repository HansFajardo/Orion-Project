import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function Members({ picture, name, email, role }) {
    return (
        <Row className='my-2 d-flex flex-row align-items-center'>
            <Col>
                <div className='d-flex flex-row align-items-center gap-2'>
                    <img
                        width={"30px"}
                        height={"30px"}
                        src={picture}
                        alt="default"
                        className="img-fluid rounded-circle border border-1 border-primary"
                    />
                    <div>{name}</div>
                </div>
            </Col>
            <Col>
                <div>
                    {email}
                </div>
            </Col>
            <Col>
                <div>
                    {role}
                </div>
            </Col>
        </Row>
    )
}
