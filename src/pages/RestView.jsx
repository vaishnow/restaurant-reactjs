import { useState } from "react";
import { Col, ListGroup, Modal, Row } from "react-bootstrap";
import RestReview from "../components/RestReview";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function RestView() {
  const [show, setShow] = useState(false);

  const { id } = useParams();
  console.log(id);

  const allRestaurant = useSelector(
    (state) => state.restaurantSlice.allrestaurant
  );
  console.log(allRestaurant);
  const selectedRestaurant=allRestaurant.find(item=>item.id==id)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Row className="w-100 p-2">
      <Col sm={12} md={4}>
        <img
          src={selectedRestaurant.photograph}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            maxHeight:'85vh',
            borderRadius: "1rem",
            objectFit: "cover",
          }}
        />
      </Col>
      <Col sm={12} md={8} className="d-flex flex-column">
        <h3 className="mx-auto">
          <span className="text-warning">RESTAURANT </span>DETAILS
        </h3>
        <ListGroup className="my-2">
          <ListGroup.Item className="text-center p-3 fs-3">
            <h3>{selectedRestaurant.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>Meighborhood : {selectedRestaurant.neighborhood}</ListGroup.Item>
          <ListGroup.Item>Cuisine Type : {selectedRestaurant.cuisine_type}</ListGroup.Item>
          <ListGroup.Item>Address : {selectedRestaurant.address }</ListGroup.Item>
          <ListGroup.Item className="text-center p-3 fs-3">
            <button onClick={handleShow} className="btn btn-warning me-5">
              Opening Hours
            </button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Operating Hours</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <ListGroup>
                  <ListGroup.Item>Monday:{selectedRestaurant.operating_hours.Monday}</ListGroup.Item>
                  <ListGroup.Item>Tuesday:{selectedRestaurant.operating_hours.Tuesday}</ListGroup.Item>
                  <ListGroup.Item>Wednesday:{selectedRestaurant.operating_hours.Wednesday}</ListGroup.Item>
                  <ListGroup.Item>Thursday:{selectedRestaurant.operating_hours.Thursday}</ListGroup.Item>
                  <ListGroup.Item>Friday:{selectedRestaurant.operating_hours.Friday}</ListGroup.Item>
                  <ListGroup.Item>Saturday:{selectedRestaurant.operating_hours.Saturday}</ListGroup.Item>
                  <ListGroup.Item>Sunday:{selectedRestaurant.operating_hours.Sunday}</ListGroup.Item>
                </ListGroup>
              </Modal.Body>
            </Modal>

            <RestReview review={selectedRestaurant.reviews}/>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
}

export default RestView;
