import { API_URL } from "@services/constants"
import { matchingDogs } from "../matchingDogs"

describe("Matching Dogs", () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })
  it("returns the match", () => {
    const response = {
      match: "j3GFTIcBOvEgQ5OCx40W",
    }
    fetchMock.mockResponseOnce(JSON.stringify(response))
    const matchInformation = matchingDogs(["j3GFTIcBOvEgQ5OCx40W"])
    expect(fetchMock.mock.calls.length).toEqual(1)
    expect(fetchMock.mock.calls[0][0]).toEqual(`${API_URL}/dogs/match`)
    matchInformation.then((data) => {
      expect(data).toEqual(response)
    })
  })
})
