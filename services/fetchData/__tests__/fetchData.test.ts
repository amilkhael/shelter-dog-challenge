import { API_URL } from "@services/constants"
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

  it("Get response error 401 unauthorized", async () => {
    fetchMock.mockResponseOnce("Unauthorized", {
      status: 401,
      statusText: "Unauthorized",
    })
    type TestRequest = {
      data: string
    }

    await Get<TestRequest>({ endpoint: "/test" }).catch((error) =>
      expect(error.message).toEqual("Unauthorized")
    )

    expect(fetchMock.mock.calls.length).toEqual(1)
    expect(fetchMock.mock.calls[0][0]).toEqual(`${API_URL}/test`)
  })

  it("Get response default error", async () => {
    fetchMock.mockResponseOnce("Not Found", {
      status: 404,
      statusText: "Not Found",
    })
    type TestRequest = {
      data: string
    }

    await Get<TestRequest>({ endpoint: "/test" }).catch((error) =>
      expect(error.message).toEqual("Not Found")
    )

    expect(fetchMock.mock.calls.length).toEqual(1)
    expect(fetchMock.mock.calls[0][0]).toEqual(`${API_URL}/test`)
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

    Post<TestRequest>({ endpoint: "/test", data: { data: "test" } }).then(
      (data) => data && expect(data).toEqual({ data: "12345" })
    )

    expect(fetchMock.mock.calls.length).toEqual(1)
    expect(fetchMock.mock.calls[0][0]).toEqual(`${API_URL}/test`)
  })
  it("Post data success login", () => {
    fetchMock.mockResponseOnce("OK", {
      url: `${API_URL}/login`,
    })
    type TestRequest = {
      data: string
    }

    Post<TestRequest>({ endpoint: "/login", data: { data: "test" } }).then(
      (data) => data && expect(data).toEqual("OK")
    )
    expect(fetchMock.mock.calls.length).toEqual(1)
    expect(fetchMock.mock.calls[0][0]).toEqual(`${API_URL}/login`)
  })
})
