import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title ,description ,imageUrl ,newsUrl,author, date,source} = this.props;
    return (
      <div>
        <div className="card my-3" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex: '1'}}>{source}</span>
          <img src={imageUrl?imageUrl:"/logo512.png"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
             {description}...
            </p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
