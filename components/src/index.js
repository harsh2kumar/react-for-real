import React from "react";
import ReactDOM from "react-dom";
import faker from "@faker-js/faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        avatar={faker.image.image()}
        author="Sam"
        timeAgo="Today at 2:00PM"
        commentText="Awesome!"
      />
      <CommentDetail
        avatar={faker.image.image()}
        author="Harsh"
        timeAgo="Today at 4:00PM"
        commentText="Great Work!"
      />
      <CommentDetail
        avatar={faker.image.image()}
        author="Leia"
        timeAgo="Yesterday at 6:00PM"
        commentText="Nice blog post!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
