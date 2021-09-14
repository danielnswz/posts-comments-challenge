import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addCommentAction } from "./AddComment.actionCreators";

interface Props {
  postId: number | null;
  handleClose: () => void;
}

export const AddComment: React.FC<Props> = ({ postId, handleClose }) => {
  const [state, setState] = useState({ name: "", email: "", body: "" });
  const dispatch = useDispatch();
  const handleFieldChange = (e: any, type: string) => {
    setState((prev) => {
      return {
        ...prev,
        [type]: e.target.value,
      };
    });
  };
  const handleSubmit = () => {
    dispatch(addCommentAction(postId, state));
    handleClose();
  };
  return (
    <>
      <h2 id="simple-modal-title">{`Add a comment to post nro: ${postId}`}</h2>
      <form
        style={{ display: "inline-flex", flexDirection: "column", gap: "12px" }}
      >
        <TextField
          name="name"
          id="outlined-basic"
          label="name"
          variant="outlined"
          onChange={(e) => handleFieldChange(e, "name")}
        />
        <TextField
          name="email"
          id="outlined-basic"
          label="email"
          variant="outlined"
          onChange={(e) => handleFieldChange(e, "email")}
        />
        <TextField
          name="body"
          id="outlined-multiline-static"
          label="body"
          multiline
          rows={4}
          defaultValue=""
          variant="outlined"
          onChange={(e) => handleFieldChange(e, "body")}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSubmit()}
        >
          Add
        </Button>
      </form>
    </>
  );
};
