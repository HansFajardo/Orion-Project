import React from 'react';
import { Col, Row } from 'react-bootstrap';
import DefaultPic from "../../assets/img/defaultProfPic.png";
import Members from './Members';

export default function CompanyMembersPanel() {
    return (
        <div className='rounded-3 border border-3 p-3'>
            <Row className='text-black-50 border-bottom'>
                <Col>
                    <div>
                        Name
                    </div>
                </Col>
                <Col>
                    <div>
                        Email
                    </div>
                </Col>
                <Col>
                    <div>
                        Role
                    </div>
                </Col>
            </Row>
            <Row>
                <Members picture={DefaultPic} name={"Hans Amponin"} email={"hansamponin@gmail.com"} role={"Client"}/>
                <Members picture={DefaultPic} name={"Sterling International Computing"} email={"info@iso-certification.ph"} role={"Company"}/>
            </Row>
        </div>
    )
}
