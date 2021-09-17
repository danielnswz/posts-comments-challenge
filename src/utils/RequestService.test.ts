import { expectSaga, providers } from "redux-saga-test-plan";
import apiRequestService from "./RequestService";

describe("RequestService", () => {
  let urlMock: string;
  let dataMock;
  test("should make a get api call", () => {
    urlMock = "/test";
    return expectSaga(apiRequestService, {
      method: "get",
      url: urlMock,
    })
      .provide([
        {
          race: () => ({ response: { data: null, headers: null } }),
        },
      ])
      .returns({ response: { success: true, data: null }, headers: null })
      .run();
  });

  test("should make a post api call", () => {
    dataMock = null;
    return expectSaga(apiRequestService, {
      method: "post",
      url: urlMock,
      data: dataMock,
    })
      .provide([
        {
          race: () => ({ response: { data: null, headers: null } }),
        },
      ])
      .returns({ response: { success: true, data: null }, headers: null })
      .run();
  });

  test("should stop api call when timeout reached", () => {
    return expectSaga(apiRequestService, {
      method: "get",
      url: urlMock,
    })
      .provide({
        race: () => ({ timeoutReached: true }),
      })
      .returns({
        response: {
          success: false,
          messages: ["Service call timeout."],
        },
      })
      .run();
  });

  test("should throw an exception", () => {
    const expectedException = new Error("My test error");
    return expectSaga(apiRequestService, {
      method: "get",
      url: urlMock,
    })
      .provide({ race: () => providers.throwError(expectedException) })
      .run();
  });
});
