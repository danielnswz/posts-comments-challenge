import React, { useState, useMemo } from "react";
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
import { PostComments } from "./PostComments";
import { AddComment } from "./AddComment";
import "./PostsLists.scss";

export const PostsLists: React.FC = () => {
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [open, setOpen] = useState<number | null>(null);

  const { posts, isPostsLoading, isSelectedPostLoading, errors } =
    usePostsList(selectedPostId);

  const defaultArray = useMemo(() => {
    return Array(8)
      .fill("")
      .map((_, i) => i + 1);
  }, []);

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        {errors && errors.map((error: any) => <p>{error.error}</p>)}
        {posts &&
          Object.entries(posts).map(([key, el]: any) => {
            return (
              <div className="post-item" key={key}>
                <Grid item className="post-item__container">
                  <Card className="post-item__card">
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
          defaultArray.map((el: number) => {
            return (
              <Grid key={el} item className="post-item__container">
                <Card className="post-item__card">
                  <Skeleton height={80} />
                  <Skeleton height={80} />
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
