import { Card, CardContent } from "@material-ui/core";
import React from "react";

interface Props {
  comments: any[];
}
export const PostComments: React.FC<Props> = ({ comments }) => {
  return (
    <>
      {comments &&
        comments.map((el: any) => {
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
