import React from 'react';
import editIcon from "../../assets/img/editGray.svg";
import { Button } from 'react-bootstrap';
import outlinedHeartIcon from "../../assets/img/outlinedHeart.svg";
import Tag from "../Tags";
import Row from "react-bootstrap/Row";

const ProjectPanel = (props) => {
    return (
        <div className=" container border-top border-bottom d-flex flex-column" style={{ boxSizing: 'border-box', padding: '20px 0px 20px 0px' }}>
            <div className="d-flex flex-row">
                <div className="px-2" style={{ fontSize: "13px" }}>
                    Posted
                </div>
                <div className="px-2" style={{ fontSize: "13px" }}>
                    {props.date},
                </div>
                <div className="px-2" style={{ fontSize: "13px" }}>
                    {props.time}
                </div>
                <div
                    className="px-4 text-primary fw-bold flex-lg-grow-1"
                    style={{ fontSize: "13px" }}
                >
                    {props.status}
                </div>

                <div className="px-3">Deadline: {props.deadline}</div>
            </div>
            <div className="d-flex flex-row">
                <div className="px-2 fs-5 fw-bold">{props.title}</div>
                <div>
                    <img src={editIcon} alt="edit" />
                </div>
            </div>
            <div className="d-flex flex-row justify-content-between">
                <div className="px-2 py-1" style={{ fontSize: "13px" }}>
                    Rate: {props.price}
                </div>
                <Button className='text-bg-danger border-0'>Cancel</Button>
            </div>
        </div>
    );
}

export default ProjectPanel;
