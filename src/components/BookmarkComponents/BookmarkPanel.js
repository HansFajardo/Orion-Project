import React from 'react';
import StarSystem from '../StarSystem/StarSystem';

export default function BookmarkPanel({ image, title, phone, stars, location, status, rating }) {
    return (
        <div className='bg-light me-2 p-3 position-relative text-center' style={{ width: '450px' }}>
            <button className='border-0 bg-transparent position-absolute top-0 end-0'>
                &#x2715;
            </button>
            <div className='d-flex flex-column align-items-center'>
                <img src={image} alt="Profile" width={"40px"} className='mb-2' />
                <h5>{title}</h5>
                <div className="d-flex flex-row align-items-center py-1 mt-2">
                    <div className="px-2">
                        {stars}
                    </div>
                    <div style={{whiteSpace: 'nowrap'}}>
                        <StarSystem rating={3.5} />
                    </div>
                    <div>
                        &#40;4&#41;
                    </div>
                </div>
                <h6>{location}</h6>
                <a href="#">View Company Info</a>
            </div>

            <hr />

            <div>
                {status}
            </div>

            <hr />

            <div>
                {phone}
            </div>

            <hr />

            <div>
                {rating}
            </div>
            <hr />
        </div>
    )
}
