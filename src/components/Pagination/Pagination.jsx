import "./Pagination.css";

export default function Pagination(props) {
  return (
    <div className="pagination-container">
      <button className="prev-btn btn" /*onClick={props.onPrevButtonClick}*/>
        Previous
      </button>
      <button className="next-btn btn" onClick={props.onNextButtonClick}>
        Next
      </button>
    </div>
  );
}
