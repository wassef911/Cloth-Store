import React from "react";
import { withRouter } from "react-router-dom";

function GalleryImage({ title, imageUrl, size, linkUrl, history, match }) {
  let width;
  let height;
  if (size === "large") {
    width = 25 * 1.5;
    height = 10 * 1.5;
  } else {
    width = 25 * 1.01;
    height = 10 * 1.5;
  }
  var style = {
    backgroundImage: `url(${imageUrl})`,
    height: `${height}em`,
    width: `${width}em`,
  };

  return (
    <div className="GalleryImage m-2" style={style}>
      <div
        className="sectiontitle mx-auto"
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
        <h1>{title.toUpperCase()}</h1>
        <h4>SHOP NOW</h4>
      </div>
    </div>
  );
}

export default withRouter(GalleryImage);