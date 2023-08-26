import { API_URL } from "@api/constants"
import { Post, Get } from "../fetchData"
import fetchMock from "jest-fetch-mock"

describe("Fetch", () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it("Get response success", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: "12345" }))
    type TestRequest = {
      data: string
    }

    Get<TestRequest>({
      endpoint: "/test",
    }).then((data) => data && expect(data).toEqual({ data: "12345" }))

    expect(fetchMock.mock.calls.length).toEqual(1)
    expect(fetchMock.mock.calls[0][0]).toEqual(`${API_URL}/test`)
  })

  it("Get response success with params", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: "12345" }))
    type TestRequest = {
      data: string
    }

    Get<TestRequest>({
      endpoint: "/test",
      params: "?foo=value",
    }).then((data) => data && expect(data).toEqual({ data: "12345" }))

    expect(fetchMock.mock.calls.length).toEqual(1)
    expect(fetchMock.mock.calls[0][0]).toEqual(`${API_URL}/test?foo=value`)
  })

  it("Get response error", async () => {
    fetchMock.mockRejectOnce(new Error("fake error message"))
    type TestRequest = {
      data: string
    }

    Get<TestRequest>({ endpoint: "/test" })

    expect(fetchMock.mock.calls.length).toEqual(1)
    expect(fetchMock.mock.calls[0][0]).toEqual(`${API_URL}/test`)
    fetchMock.mock.results[0].value.then(
      () => {
        // not called
      },
      (error: Error) => {
        expect(error.message).toEqual("fake error message")
      }
    )
  })
  it("Post data success with no data", () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: "12345" }))
    type TestRequest = {
      data: string
    }

    Post<TestRequest>({ endpoint: "/test" }).then(
      (data) => data && expect(data).toEqual({ data: "12345" })
    )

    expect(fetchMock.mock.calls.length).toEqual(1)
    expect(fetchMock.mock.calls[0][0]).toEqual(`${API_URL}/test`)
  })
  it("Post data success with data", () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: "12345" }))
    type TestRequest = {
      data: string
    }

    Post<TestRequest>({ endpoint: "/test", data: { test: "test" } }).then(
      (data) => data && expect(data).toEqual({ data: "12345" })
    )

    expect(fetchMock.mock.calls.length).toEqual(1)
    expect(fetchMock.mock.calls[0][0]).toEqual(`${API_URL}/test`)
  })
})
