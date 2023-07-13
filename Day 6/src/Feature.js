import React from "react";

export default class Feature extends React.Component {
  render() {
    return (
      <div className="mdl-grid main-feature">
        <div className="our-fleet--heading">
          Featured In <hr className="hr-bottom" />
        </div>
        <div className="mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-phone feature-images">
          <a href="">
            <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/news3-2eb9e0398a565284ca3c41d685e32de985b43ce00541889f59541ee91cb28e61.png" />
          </a>
        </div>
        <div className="mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-phone feature-images">
          <a href="">
            <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/news1-0a213d6dc03c6d68b278a11f210efe7cd727bf2f1fc34982b90b34d2d1c875da.png" />
          </a>
        </div>
        <div className="mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-phone feature-images">
          <a href="">
            <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/news2-b2db5fe5ecf6968d4e47cba7876d3ae8a959a5de65901b5a6292032987a38bdd.png" />
          </a>
        </div>
        <div className="mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-phone feature-images">
          <a href="">
            <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/news4-c25496809b2f79687ef4eea519fb95fb45a08731d4ee998625184e341c7f52bf.png" />
          </a>
        </div>
      </div>
    );
  }
}
