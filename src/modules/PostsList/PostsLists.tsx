import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Modal,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { usePostsList } from "./PostsLists.hooks";
import "./PostsLists.scss";
import { PostComments } from "./PostComments";
import { AddComment } from "./AddComment/AddComment";

export const PostsLists: React.FC = () => {
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [open, setOpen] = useState<number | null>(null);

  const { posts, isPostsLoading, isSelectedPostLoading } =
    usePostsList(selectedPostId);

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        {posts &&
          Object.entries(posts).map(([key, el]: any) => {
            return (
              <div className="post-item" key={key}>
                <Grid item style={{ width: "100%" }}>
                  <Card style={{ padding: 10, width: "100%" }}>
                    <CardHeader title={`${el.id} - ${el.title}`} />
                    <CardContent>
                      <p>{el.body}</p>
                      <div>
                        {selectedPostId === key &&
                          isSelectedPostLoading &&
                          "Loading..."}
                        {selectedPostId === key && !isSelectedPostLoading && (
                          <PostComments comments={el.comments} />
                        )}
                      </div>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() =>
                          setSelectedPostId(selectedPostId === key ? null : key)
                        }
                        disabled={
                          selectedPostId === key && isSelectedPostLoading
                        }
                      >
                        {selectedPostId === key
                          ? "Dismiss comments"
                          : "View comments"}
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => setOpen(key)}
                      >
                        Add comment
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </div>
            );
          })}
        {isPostsLoading &&
          new Array(8).fill("").map((el: any, index: number) => {
            return (
              <Grid key={index} item style={{ width: "100%" }}>
                <Card style={{ padding: 10, width: "100%" }}>
                  <Skeleton style={{ padding: "16px" }} />
                  <Skeleton style={{ padding: "16px" }} />
                </Card>
              </Grid>
            );
          })}
      </Grid>
      <Modal
        open={open !== null}
        onClose={() => setOpen(null)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="modal"
      >
        <div className="modal__container">
          <AddComment postId={open} handleClose={() => setOpen(null)} />
        </div>
      </Modal>
    </>
  );
};
