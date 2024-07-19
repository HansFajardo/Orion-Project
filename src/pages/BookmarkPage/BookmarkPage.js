import React from 'react';
import MainLayout from '../../layouts/MainLayout.js';
import BookmarkPanel from '../../components/BookmarkComponents/BookmarkPanel.js';
import { Col, Row } from 'react-bootstrap';

export default function BookmarkPage() {
    const number = 4;
    return (
        <MainLayout>
            <div className='container'>
                <Row>
                    <div className='container pt-5 pb-3'>
                        <div className='fw-semibold fs-4'>
                            My Bookmark &#40;{number}&#41;
                        </div>
                    </div>
                </Row>
                <Row>
                    <Col className='border border-end' md={2}>
                        <div style={{height: "187px"}}>
                            
                        </div>
                        <hr />
                        <div className='fw-semibold'>
                            Status
                        </div>
                        <hr />
                        <div className='fw-semibold'>
                            Contact
                        </div>
                        <hr />
                        <div>
                            Your Rating
                        </div>
                        <hr />
                    </Col>
                    <Col className='d-flex flex-row overflow-auto' md={10}>
                        <BookmarkPanel 
                        image={'https://img.shgstatic.com/clutch-static-prod/image/scale/60x60/s3fs-public/logos/27ab2fe6dcaa55d7767afa56d99d4b64.png'}
                        title={'Nomtek'}
                        stars={4.6}
                        phone={'0923142151'}
                        location={'Wrocław, Poland'}
                        status={'Still Hiring'}
                        rating={4.5}
                        />
                        <BookmarkPanel 
                        image={'https://img.shgstatic.com/clutch-static-prod/image/scale/60x60/s3fs-public/logos/21855c219c402fc71dc7a791e6071aed.png'}
                        title={'11th Agency'}
                        stars={5.0}
                        phone={'0923142151'}
                        location={'Wrocław, Poland'}
                        status={'Still Hiring'}
                        rating={32}
                        />
                        <BookmarkPanel 
                        image={'https://img.shgstatic.com/clutch-static-prod/image/scale/60x60/s3fs-public/logos/21855c219c402fc71dc7a791e6071aed.png'}
                        title={'11th Agency'}
                        stars={5.0}
                        phone={'0923142151'}
                        location={'Wrocław, Poland'}
                        status={'Still Hiring'}
                        rating={32}
                        />
                        <BookmarkPanel 
                        image={'https://img.shgstatic.com/clutch-static-prod/image/scale/60x60/s3fs-public/logos/21855c219c402fc71dc7a791e6071aed.png'}
                        title={'11th Agency'}
                        stars={5.0}
                        phone={'0923142151'}
                        location={'Wrocław, Poland'}
                        status={'Still Hiring'}
                        rating={32}
                        />
                        <BookmarkPanel 
                        image={'https://img.shgstatic.com/clutch-static-prod/image/scale/60x60/s3fs-public/logos/21855c219c402fc71dc7a791e6071aed.png'}
                        title={'11th Agency'}
                        stars={5.0}
                        phone={'0923142151'}
                        location={'Wrocław, Poland'}
                        status={'Still Hiring'}
                        rating={32}
                        />
                        <BookmarkPanel 
                        image={'https://img.shgstatic.com/clutch-static-prod/image/scale/60x60/s3fs-public/logos/21855c219c402fc71dc7a791e6071aed.png'}
                        title={'11th Agency'}
                        stars={5.0}
                        phone={'0923142151'}
                        location={'Wrocław, Poland'}
                        status={'Still Hiring'}
                        rating={32}
                        />
                        <BookmarkPanel 
                        image={'https://img.shgstatic.com/clutch-static-prod/image/scale/60x60/s3fs-public/logos/21855c219c402fc71dc7a791e6071aed.png'}
                        title={'11th Agency'}
                        stars={5.0}
                        phone={'0923142151'}
                        location={'Wrocław, Poland'}
                        status={'Still Hiring'}
                        rating={32}
                        />
                    </Col>
                </Row>
            </div>
        </MainLayout>
    )
}
