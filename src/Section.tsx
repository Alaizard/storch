import React from "react";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";
const data = require("./data.json");

const Section = () => {
  return (
    <CommentSection
      currentUser={data.currentUser}
      commentData={data.comments}
      onSubmitAction={(data: {
        id: number;
        userId: number;
        content: string;
        createdAt: Date;
        score: number;
        user: {
          image: {
            png: string;
            webp: string;
          };
          username: string;
        };
        replies?:
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
          | undefined;
      }) => console.log("Submitted, ", data)}
      logIn={{
        loginLink: "",
        signupLink: ""
      }}
      commentData={data.comments}
    />
  );
};

export default Section;
