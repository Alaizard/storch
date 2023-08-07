import { Component } from "react";

type CommentState = {
  data: {
    currentUserProfile: any;
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
  };
};

class Comment extends Component {
  state: CommentState = {
    data: this.props.data
  };

  render() {
    return (
      <body>
        <header>
          {this.state.data.currentUserProfile.username}{" "}
          {this.state.data.createdAt}
        </header>
        <p>{this.state.data.content}</p>
      </body>
    );
  }
}

export default Comment;
