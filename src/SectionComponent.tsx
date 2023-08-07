import { Component } from "react";
import Comment from "./Comment";
import { CommentSection } from "react-comments-section";
const data = require("./data.json");
type AppState = {
  currentUserProfile: any;
  comments:
    | Array<{
        id: number;
        userId: number;
        content: string;
        createdAt: Date;
        score: number;
        replyingTo: string;
        user: {
          image: {
            png: string;
            webp: string;
          };
          username: string;
        };
      }>
    | "";
};
class SectionComponent extends Component {
  state: AppState = {
    currentUserProfile: data.currentUserProfile,
    comments: data.comments
  };

  onSubmitAction = (data: any) => {
    console.log("this comment was posted!", data);
  };

  commentSetup = (comments: any) => {
    comments.forEach((comment: any) => {
      <Comment data={comment} />;
    });
  };

  render() {
    return (
      <CommentSection
        currentUser={this.state.currentUserProfile}
        commentData={this.state.comments}
        onSubmitAction={(data: any) => this.onSubmitAction(data)}
        logIn={{
          loginLink: "http://localhost:3000/",
          signupLink: "http://localhost:3000/"
        }}
      >
        <header>{}</header>
      </CommentSection>
    );
  }
}

export default SectionComponent;
