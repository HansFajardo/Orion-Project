import React, { useState } from "react";
import defaultPic from "../../assets/img/defaultProfPic.png";
import Image from "react-bootstrap/Image";
import MessageReceive from "./MessageReceive.js";
import MessageSent from "./MessageSent.js";
import { Button } from "react-bootstrap";
import StartProjectModal from "../StartProjectModal/StartProjectModal.js";

const MessagesWrapper = ({ selectedSender }) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [modalHireShow, setModalHireShow] = React.useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div
      className="w-100 bg-light d-flex flex-column overflow-y-auto position-relative"
      style={{ height: "calc(100vh - 88px)" }}
    >
      <Button
        variant="outline-primary"
        className="position-absolute px-3"
        style={{ top: "20px", right: "20px" }}
        onClick={() => setModalHireShow(true)}
      >
        Hire
      </Button>
      <StartProjectModal
        show={modalHireShow}
        onHide={() => setModalHireShow(false)}
      />
      <div
        className="w-100 bg-white d-flex align-items-center justify-content-center gap-3 shadow-sm py-4"
        style={{ height: "80px" }}
      >
        <Image
          src={defaultPic}
          roundedCircle
          fluid
          style={{
            width: "50px",
            height: "50px",
            border: "2px solid #7A1CA7",
          }}
        />
        <div className="fs-4 fw-semibold">{selectedSender}</div>
      </div>
      <div
        className="overflow-auto d-flex flex-column p-2"
        style={{ marginBottom: "75px" }}
      >
        <MessageReceive />
        <MessageSent />
        <MessageSent />
        <MessageSent />
        <MessageSent />
        <MessageSent />
      </div>
      <div
        className="d-flex py-2 align-items-center justify-content-center bg-white border border-top position-absolute bottom-0 w-100"
        style={{ height: "75px" }}
      >
        <div
          className={`w-75 rounded-4 d-flex justify-content-between bg-light border ${
            isInputFocused || isHovered ? "border-primary" : "border-black-50"
          }`}
          style={{ height: "50px" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <i className="bi bi-image my-auto ms-4 me-2 fs-4 text-primary pointer"></i>
          <input
            type="text"
            className="w-100 border border-0 bg-light"
            style={{ outline: "none" }}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
          />
          {inputValue.trim() !== "" ? (
            <i className="bi bi-send-fill my-auto mx-4 fs-4 text-primary pointer"></i>
          ) : (
            <i className="bi bi-send my-auto mx-4 fs-4 text-primary"></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesWrapper;
