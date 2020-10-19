import React from "react";
import "../styles/Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets_widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1317551354634698755"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="espn"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.facebook.com/khoury.smith"}
          options={{ text: "#bestdeveloperalive", via: "2cool_khoury" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
