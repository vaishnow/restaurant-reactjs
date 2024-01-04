import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import RestCard from "../components/RestCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurant } from "../redux/restaurantSlice";

function Home() {
  const allrestaurant = useSelector(
    (state) => state.restaurantSlice.allrestaurant
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // called thunk func
    dispatch(fetchRestaurant());
  }, []);
  return (
    <Row className="w-100 p-5 g-5">
      {allrestaurant?.length > 0 ? (
        allrestaurant.map((restaurant) => (
          <Col key={restaurant.id} sm={6} md={4}>
            <RestCard restaurant={restaurant} />
          </Col>
        ))
      ) : (
        <p>Nothing to display</p>
      )}
    </Row>
  );
}

export default Home;
