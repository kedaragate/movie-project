import "./NavigationBar.css";

export default function NavigationBar(props) {
  return (
    <>
      <div className="navbar">
        <h1 className="webpage-logo">favMovies</h1>
        {/* <ul className="navbar-menu">
          <li className="navbar-list-item">About</li>
          <li className="navbar-list-item">Home</li>
          <li className="navbar-list-item">Contact</li>
        </ul> */}
        <input
          type="text"
          className="Search-Field"
          value={props.input}
          onChange={(e) => props.onChange(e)}
          placeholder="Search movies"
        />
      </div>
    </>
  );
}
