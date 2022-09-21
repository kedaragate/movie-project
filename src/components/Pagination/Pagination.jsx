import "./Pagination.css";

export default function Pagination(props) {
  console.log(props);
  return (
    <div className="pagination-container">
      <button className="prev-btn btn">Previous</button>
      <button className="next-btn btn" onClick={props.onNextButtonClick}>
        Next
      </button>
    </div>
  );
}
