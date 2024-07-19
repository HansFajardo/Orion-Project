import React from 'react';
import { Col, Row } from 'react-bootstrap';
import StarSystem from '../StarSystem/StarSystem';

export default function IndividualReview({ name, email, comment, rating }) {
    return (
        <div className='border-top border-bottom container py-2'>
            <div className='fs-5'>
                {name}
            </div>
            <div style={{ fontSize: '12px' }}>
                {email}
            </div>
            <Row className='mt-2'>
                <Col xs={8}>
                    {comment}
                </Col>
                <Col>
                    <StarSystem rating={rating} />
                </Col>
            </Row>
        </div>
    )
}
