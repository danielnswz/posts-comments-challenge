export interface IComment {
  id?: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export interface IPost {
  id: number | string;
  userId: number;
  title: string;
  body: string;
}

export interface IRequest {
  method: string;
  url: string;
  list: boolean;
}

export interface IResponse {
  response: any;
  list: boolean;
}

export interface IError {
  error: any;
  list: boolean;
}
