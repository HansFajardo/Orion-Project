import React from "react";
import { Stack } from "react-bootstrap";
import Tag from "../../../components/Tags";
import { Link } from "react-router-dom";
import {
  CalendarMonthOutlined,
  DeleteOutline,
  EditOutlined,
  LocationOnOutlined,
  SellOutlined,
} from "@mui/icons-material";
import Row from "react-bootstrap/Row";

export default function PostView({
  title,
  date,
  time,
  price,
  tag,
  location,
  timeline,
}) {
  return (
    <div>
      <div
        className=" container-fluid d-flex flex-column gap-2"
        style={{ boxSizing: "border-box", padding: "20px 130px 20px 130px" }}
      >
        <div className="d-flex flex-row">
          <div className="px-2" style={{ fontSize: "13px" }}>
            Posted
          </div>
          <div className="px-2" style={{ fontSize: "13px" }}>
            {date},
          </div>
          <div className="px-2" style={{ fontSize: "13px" }}>
            {time}
          </div>
          <div
            className="px-4 text-primary fw-bold flex-lg-grow-1 pointer"
            style={{ fontSize: "13px" }}
          >
            OPEN
          </div>
          {/* <div className='ps-2' style={{boxSizing: 'border-box', height: '24px', width: '24px'}}>
          <img src={outlinedHeartIcon} alt="heart" />
        </div>
        <div className="px-3">{props.likes}</div> */}
        </div>
        <div className="d-flex flex-row">
          <div className="px-2 fs-5 fw-bold flex-fill">{title}</div>
          <div
            className="ps-2 pointer"
            // style={{ boxSizing: "border-box", height: "24px", width: "24px" }}
          >
            {/* <img src={editIcon} alt="edit" /> */}
            <EditOutlined />
            <DeleteOutline />
          </div>
        </div>

        <Row className="px-2">
          <div>
            Hello Professionals, I’m looking for a skilled 3D modeler for our
            thesis project, deadline is in three weeks. Interested? Drop a
            message for details. Thank You.
          </div>
          <div
            className="d-flex flex-row gap-2 p-3"
            style={{ boxSizing: "border-box" }}
          >
            {tag.map((tag) => (
              <Tag tag={tag} />
            ))}

            {/* <Tag tag={tag[1]} /> */}
          </div>
          <Stack direction="horizontal" gap={5}>
            <div className="d-flex flex-row align-items-center gap-2">
              <div>Initial Budget:</div>
              <div className="py-1 fw-light">{price}</div>
            </div>
            <div className="d-flex flex-row align-items-center gap-2">
              <CalendarMonthOutlined />
              <div className="py-1 fw-light">{timeline}</div>
            </div>
            <div className="d-flex flex-row align-items-center gap-2">
              <LocationOnOutlined />
              <div className="py-1 fw-light">{location}</div>
            </div>
          </Stack>
        </Row>
      </div>
    </div>
  );
}
