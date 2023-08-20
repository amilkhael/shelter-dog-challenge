import { fetchData, checkStatus } from "../fetchData"
import fetchMock from "jest-fetch-mock"

describe("Fetch", () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it("response success", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: "12345" }))
    type TestRequest = {
      data: string
    }

    fetchData<TestRequest>("http://testapi.com").then(
      (data) => data && expect(data).toEqual({ data: "12345" })
    )

    expect(fetchMock.mock.calls.length).toEqual(1)
    expect(fetchMock.mock.calls[0][0]).toEqual("http://testapi.com")
  })

  it("response error", async () => {
    fetchMock.mockRejectOnce(new Error("fake error message"))
    type TestRequest = {
      data: string
    }

    fetchData<TestRequest>("http://testapi.com")

    expect(fetchMock.mock.calls.length).toEqual(1)
    expect(fetchMock.mock.calls[0][0]).toEqual("http://testapi.com")
    fetchMock.mock.results[0].value.then(
      () => {
        // not called
      },
      (error: Error) => {
        expect(error.message).toEqual("fake error message") // Stacktrace
      }
    )
  })
  it("returns a rejected promise when error happened", () => {
    const myBlob = new Blob()
    const myOptions = { status: 401, statusText: "Error test" }
    const myResponse = new Response(myBlob, myOptions)
    const testPromise = checkStatus(myResponse)
    testPromise.then(
      () => {
        // not called
      },
      (error: Error) => {
        expect(error.message).toEqual("Error test") // Stacktrace
      }
    )
  })
})
