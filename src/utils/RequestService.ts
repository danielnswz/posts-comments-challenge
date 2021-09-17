/* eslint-disable import/prefer-default-export */
import axios from "axios";
import { call, delay, race } from "redux-saga/effects";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 30000,
  responseType: "json",
});

export default function* RequestService(options: any, timeout = 40000) {
  try {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const data = {
      ...options.data,
    };

    const { response, timeoutReached } = yield race({
      response: call(axiosInstance.request, {
        method: options.method,
        url: options.url,
        data:
          options.method === "post" || options.method === "put"
            ? data
            : undefined,
        cancelToken: source.token,
      }),
      timeoutReached: delay(timeout),
    });

    if (timeoutReached) {
      source.cancel();

      return {
        response: {
          success: false,
          messages: ["Service call timeout."],
        },
      };
    }

    return {
      response: { success: true, data: response.data },
      headers: response.headers,
    };
  } catch (error) {
    return error;
  }
}
