import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { IComment } from "../types";

interface Props {
  comments: IComment[];
}
export const PostComments: React.FC<Props> = ({ comments }) => {
  return (
    <>
      {comments &&
        comments.map((el: IComment) => {
          return (
            <Card key={el.id} variant="outlined">
              <CardContent>
                <b>{el.name}</b> - <small>{el.email}</small>
                <p>{el.body}</p>
              </CardContent>
            </Card>
          );
        })}
    </>
  );
};
