import "./Pagination.css";

export default function Pagination(props) {
  return (
    <div className="pagination-container">
      <button className="prev-btn btn">Previous</button>
      <button className="next-btn btn">Next</button>
    </div>
  );
}
