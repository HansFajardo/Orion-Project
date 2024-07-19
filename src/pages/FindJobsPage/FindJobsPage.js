import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import FindJobComponents from '../../components/FindJobComponents/FindJobComponents';
import { Container, Row } from 'react-bootstrap';


export default function FindJobsPage() {

    return (
        <MainLayout>
            <Container fluid className="p-4 bg-primary text-light ">
              <Row>
                <div className="d-flex fs-4">
                  <span className="fw-light">1234 Clients found for </span>
                  <span className="fw-bold ps-2">"Web Development"</span>
                </div>
              </Row>
            </Container>

            <div className='container my-3 d-flex flex-column gap-3'>
                <FindJobComponents
                    name={'Hans Angelo V. Amponin'}
                    postDate={'12 March 2024'}
                    postTime={'08:03 AM'}
                    title={'3D Modeler for a Thesis Project - RUSH!'}
                    description={'Testing for Description'}
                    tags={['3D Model', 'Thesis']}
                    price={'15,000'}
                    deadline={'Feb - June 2020'}
                    location={'Meycauayan, Bulacan'}
                />

                <FindJobComponents
                    name={'John Paul Calugay'}
                    postDate={'6 May 2024'}
                    postTime={'09:36 AM'}
                    title={'UI/UX Design'}
                    description={'Testing for Description 2'}
                    tags={['UI', 'UX']}
                    price={'10,000'}
                    deadline={'May - July 2024'}
                    location={'Marilao, Bulacan'}
                />
            </div>
        </MainLayout>
    )
}
