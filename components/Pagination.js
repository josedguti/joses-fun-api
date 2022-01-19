import React from "react";
import './Pagination.css'

const Pagination = ( props ) => {
  const handlePrevious = () => {
    props.onPrevious();
  };

  const handleNext = () => {
    props.onNext();
  };

  return (
    <nav>
      <br />
      <ul className="pagination justify-content-center">
        {props.prev ? (
          <li className="page-item">
            <button className='button' onClick={handlePrevious}>
              Previous
            </button>
          </li>
        ) : null}
        {props.next ? (
          <li className="page-item">
            <button className='button' onClick={handleNext}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
