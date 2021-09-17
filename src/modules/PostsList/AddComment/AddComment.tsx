import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@material-ui/core";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../common/hooks";
import { addCommentAction } from "./AddComment.actionCreators";
import { schema } from "./AddComment.schema";
import "./AddComment.scss";
import { FormData } from "./types";

interface Props {
  postId: number | null;
  handleClose: () => void;
}

export const AddComment: React.FC<Props> = ({ postId, handleClose }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(addCommentAction({ ...data, postId: Number(postId) }) as any);
    handleClose();
  };

  return (
    <>
      <h2 id="simple-modal-title">{`Add a comment to post nro: ${postId}`}</h2>
      <form className="add-comment-form">
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <TextField
                onChange={onChange}
                value={value}
                label={"Name"}
                error={!!errors.name?.message}
                variant="outlined"
              />
              <p className="add-comment-form__error">{errors.name?.message}</p>
            </>
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <TextField
                onChange={onChange}
                value={value}
                label={"Email"}
                error={!!errors.email?.message}
                variant="outlined"
              />
              <p className="add-comment-form__error">{errors.email?.message}</p>
            </>
          )}
        />
        <Controller
          name="body"
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <TextField
                onChange={onChange}
                value={value}
                label={"Body"}
                error={!!errors.body?.message}
                multiline
                rows={4}
                variant="outlined"
              />
              <p className="add-comment-form__error">{errors.body?.message}</p>
            </>
          )}
        />
        <Button variant="contained" onClick={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </form>
    </>
  );
};
