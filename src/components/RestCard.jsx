import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function RestCard({restaurant}) {
  return (
    <Link to={`/restaurant_view/${restaurant.id}`} style={{ textDecoration: "none" }}>
      <Card style={{ width: "100%" }}>
        <Card.Img
          variant="top"
          src={restaurant.photograph}
        />
        <Card.Body>
          <Card.Title style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{restaurant.name}</Card.Title>
          <Card.Text className="d-flex flex-column">
              <span>{restaurant.neighborhood}</span>
              <span>Cuisine Type : {restaurant.cuisine_type}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default RestCard;
