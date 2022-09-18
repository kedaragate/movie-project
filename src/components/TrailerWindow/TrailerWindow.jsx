import "./TrailerWindow.css";

export default function TrailerWindow(props) {
  console.log(props);
  return (
    <div className="blur-background" onClick={props.handleClickOnBlur}>
      <div className="video-container">
        <iframe
          className="video-embed"
          src={props.trailer.linkEmbed}
          // width="100%"
          // height="100%"
          allowFullScreen
          webkitallowfullscreen="true"
          frameBorder="no"
          scrolling="yes"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
}
