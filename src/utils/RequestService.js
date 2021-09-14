/* eslint-disable import/prefer-default-export */
import axios from "axios";
import { call, delay, race } from "redux-saga/effects";

export default function* RequestService(options: any, timeout = 40000) {
  try {
    const path = `${process.env.REACT_APP_API}${options.url}`;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const data = {
      ...options.data,
    };

    const { response, timeoutReached } = yield race({
      response: call(
        axios[options.method],
        path,
        options.method === "get" ? config : data,
        config
      ),
      timeoutReached: delay(timeout),
    });

    if (timeoutReached) {
      axios.Cancel();

      return {
        response: {
          success: false,
          messages: ["Service call timeout."],
        },
      };
    }

    return { response: response.data, headers: response.headers };
  } catch (error) {
    return error;
  }
}
