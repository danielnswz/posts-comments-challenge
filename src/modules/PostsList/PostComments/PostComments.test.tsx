import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, RenderResult } from "@testing-library/react";
import { PostComments } from "./PostComments";
import { IComment } from "../types";

describe("<PostComments />", () => {
  let component: RenderResult;
  const postCommentsProps: IComment[] = [
    {
      id: 1,
      postId: 1,
      name: "nameString",
      email: "emailString",
      body: "bodyString",
    },
  ];

  test("renders", () => {
    component = render(<PostComments comments={postCommentsProps} />);

    component.getByText(`${postCommentsProps[0].name}`);
    component.getByText(`${postCommentsProps[0].email}`);
    component.getByText(`${postCommentsProps[0].body}`);
  });
});
