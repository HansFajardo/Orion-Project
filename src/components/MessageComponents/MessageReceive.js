import React from "react"
import defaultPic from "../../assets/img/defaultProfPic.png";
import Image from "react-bootstrap/Image";

function MessageReceive() {
    return (
        <div className='d-flex flex-row my-2 mx-4'>
            <Image
                src={defaultPic}
                roundedCircle
                fluid
                style={{
                    width: "30px",
                    height: "30px",
                    border: "2px solid #7A1CA7",
                    marginRight: "16px",
                    marginTop: "auto",
                }}
            />
            <div className='rounded-3 bg-white py-2 px-3 d-inline-block' style={{ maxWidth: "30vw" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper viverra nam libero justo laoreet sit amet cursus. Vitae sapien pellentesque habitant morbi tristique. Interdum varius sit amet mattis vulputate. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus.

            </div>
        </div>
    )
}

export default MessageReceive;
