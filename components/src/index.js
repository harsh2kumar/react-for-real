import React from "react";
import ReactDOM from "react-dom";
import faker from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.image()}
          author="Sam"
          timeAgo="Today at 2:00PM"
          commentText="Awesome!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.image()}
          author="Harsh"
          timeAgo="Today at 4:00PM"
          commentText="Great Work!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.image()}
          author="Leia"
          timeAgo="Yesterday at 6:00PM"
          commentText="Nice blog post!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
