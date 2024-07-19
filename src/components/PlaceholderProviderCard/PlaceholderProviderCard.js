import React from "react";

import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

export default function PlaceholderProviderCard() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <div className="d-flex justify-content-center">
            <Placeholder.Button variant="primary" xs={6} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
