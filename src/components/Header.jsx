import React from "react";
import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import {search} from '../redux/restaurantSlice'

function Header() {
  const dispatch=useDispatch()
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="d-flex">
            <img
              src="http://www.clipartbest.com/cliparts/yik/6bq/yik6bqerT.png"
              alt=""
              style={{width:'4rem'}}
            />
            <h4 className="mt-3"><span className="text-warning">Food</span> Circle</h4>
          </Navbar.Brand>
          <Form>
            <Form.Control onChange={(e)=>dispatch(search(e.target.value))} type='text' placeholder='Search here'></Form.Control>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
