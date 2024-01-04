import React from "react";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

function RestReview(props) {
  const review = props.review;
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(!open)} className="btn btn-warning">
        View Reviews
      </button>
      <Collapse in={open}>
        <div>
          {review.map((reviewer,index) => (
            <div key={index}>
              <hr />
              <h3>{reviewer.name} : {reviewer.date}</h3>
              <h6>Rating : {reviewer.rating}</h6>
              <h6>Comment : {reviewer.comments}</h6>
            </div>
          ))}
        </div>
      </Collapse>
    </>
  );
}

export default RestReview;
