import React from "react";
import "../styles/TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import { useState } from "react";
import db from "../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "K Dot",
      username: "krockthedeveloper",
      verified: true,
      text: tweetMessage,
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4D03AQH-r-rhhW3YVQ/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=4FC2Paopt8EEDwGd6EIEo0HgnokephN8LTHty_zkfcg",
      image: tweetImage,
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweet_box">
      <form action="">
        <div className="tweet_box_input">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQH-r-rhhW3YVQ/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=4FC2Paopt8EEDwGd6EIEo0HgnokephN8LTHty_zkfcg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's Happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweet_box_inputImage"
          placeholder="Add image URL"
          type="text"
        />
        <Button onClick={sendTweet} className="tweet_box_button">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
